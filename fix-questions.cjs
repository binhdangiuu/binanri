const fs = require('fs');
const path = require('path');

// Read and convert questions.js
const content = fs.readFileSync(path.join(__dirname, 'src/data/questions.js'), 'utf-8');

// Split into imports and rest
const importMatch = content.match(/(^[\s\S]*?)(const questions = \[[\s\S]*\][\s\n]*export default questions;)/m);
if (!importMatch) {
  console.error('Could not parse file');
  process.exit(1);
}

const imports = importMatch[1];
let dataStr = importMatch[2];

// Replace mipsMemory, img5562_1, img5562_2, img6369 with placeholder objects
dataStr = dataStr.replace(/image:\s*mipsMemory/g, 'image: "mipsMemory"');
dataStr = dataStr.replace(/image:\s*mipsMemory,/g, 'image: "mipsMemory",');
dataStr = dataStr.replace(/images:\s*\[img5562_1, img5562_2\]/g, 'images: ["img5562_1", "img5562_2"]');
dataStr = dataStr.replace(/image:\s*img6369/g, 'image: "img6369"');

// Remove "const questions = " and get just array
const arrayMatch = dataStr.match(/const questions = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error('Could not extract array');
  process.exit(1);
}

let questions;
try {
  questions = eval(arrayMatch[1]);
} catch (e) {
  console.error('Error parsing array:', e.message);
  process.exit(1);
}

const optionLetters = ["A", "B", "C", "D", "E", "F"];

// Convert each question
const converted = questions.map(item => {
  const newItem = { ...item };
  
  // Convert options array to object
  if (Array.isArray(newItem.options)) {
    const optionsObj = {};
    newItem.options.forEach((opt, idx) => {
      optionsObj[optionLetters[idx] || String(idx)] = opt;
    });
    newItem.options = optionsObj;
  }
  
  // Convert numeric answer to letter
  if (typeof newItem.answer === "number") {
    newItem.answer = optionLetters[newItem.answer] || String(newItem.answer);
  }
  
  // Convert question string to object
  if (typeof newItem.question === "string") {
    newItem.question = {
      main: newItem.question,
      ...(newItem.context && { context: newItem.context }),
      ...(newItem.image && { image: newItem.image }),
      ...(newItem.ask && { ask: newItem.ask }),
      ...(newItem.code && { code: newItem.code }),
      ...(newItem.tree && { tree: newItem.tree }),
      ...(newItem.sequence && { sequence: newItem.sequence }),
      ...(newItem.insertions && { insertions: newItem.insertions }),
      ...(newItem.deletions && { deletions: newItem.deletions }),
      ...(newItem.operations && { operations: newItem.operations }),
      ...(newItem.statements && { statements: newItem.statements }),
      ...(newItem.rule && { rule: newItem.rule }),
      ...(newItem.images && { images: newItem.images }),
    };
    delete newItem.context;
    delete newItem.image;
    delete newItem.ask;
    delete newItem.code;
    delete newItem.tree;
    delete newItem.sequence;
    delete newItem.insertions;
    delete newItem.deletions;
    delete newItem.operations;
    delete newItem.statements;
    delete newItem.rule;
    delete newItem.images;
  }
  
  return newItem;
});

// Restore image references
const result = JSON.stringify(converted, null, 2);
const restored = result
  .replace(/"image": "mipsMemory"/g, 'image: mipsMemory')
  .replace(/"images": \["img5562_1", "img5562_2"\]/g, 'images: [img5562_1, img5562_2]')
  .replace(/"image": "img6369"/g, 'image: img6369');

const newContent = imports + 'const questions = ' + restored + ';\n\nexport default questions;';

fs.writeFileSync(path.join(__dirname, 'src/data/questions.js'), newContent, 'utf-8');
console.log('✅ Converted questions.js');
