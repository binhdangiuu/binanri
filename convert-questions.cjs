const fs = require('fs');
const path = require('path');

const optionLetters = ["A", "B", "C", "D", "E", "F"];

function convertQuestionsFile(inputPath, outputPath) {
  try {
    const content = fs.readFileSync(inputPath, 'utf-8');
    
    // Split by "const questions = [" to get imports and data
    const parts = content.split(/const questions = \[/);
    if (parts.length !== 2) {
      console.error(`Could not split file properly: ${inputPath}`);
      return;
    }
    
    const imports = parts[0];
    const dataWithFooter = parts[1];
    
    // Extract just the array content before "export"
    const dataMatch = dataWithFooter.match(/([\s\S]*?)\][\s\n]*export default questions/);
    if (!dataMatch) {
      console.error(`Could not extract data: ${inputPath}`);
      return;
    }
    
    const dataStr = '[' + dataMatch[1] + ']';
    
    // Parse using Function constructor (safer than eval)
    const data = (new Function('mipsMemory, img5562_1, img5562_2, img6369', `return ${dataStr}`))
      (require(path.join(path.dirname(inputPath), '../assets/20-22.png')),
       require(path.join(path.dirname(inputPath), '../assets/55-62(1).png')),
       require(path.join(path.dirname(inputPath), '../assets/55-62(2).png')),
       require(path.join(path.dirname(inputPath), '../assets/63-69.png')));
    
    // Convert each item
    const converted = data.map(item => {
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
      
      // Convert question string to object structure
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
        // Remove top-level duplicates
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
      } else if (newItem.question && typeof newItem.question === "object") {
        const q = newItem.question;
        if (newItem.context && !q.context) q.context = newItem.context;
        if (newItem.image && !q.image) q.image = newItem.image;
        if (newItem.ask && !q.ask) q.ask = newItem.ask;
        if (newItem.images && !q.images) q.images = newItem.images;
        
        delete newItem.context;
        delete newItem.image;
        delete newItem.ask;
        delete newItem.images;
      }
      
      return newItem;
    });
    
    // Generate new content
    const newContent = imports + 'const questions = ' + JSON.stringify(converted, null, 2) + ';\n\nexport default questions;';
    
    fs.writeFileSync(outputPath, newContent, 'utf-8');
    console.log(`✅ Converted ${inputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

convertQuestionsFile(
  path.join(__dirname, 'src', 'data', 'questions.js'),
  path.join(__dirname, 'src', 'data', 'questions.js')
);
