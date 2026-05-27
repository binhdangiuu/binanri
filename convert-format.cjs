const fs = require('fs');
const path = require('path');

const optionLetters = ["A", "B", "C", "D", "E", "F"];

function convertQuestion(oldItem) {
  const newItem = { ...oldItem };
  
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
      context: newItem.context,
      image: newItem.image,
      ask: newItem.ask,
      code: newItem.code,
      tree: newItem.tree,
      sequence: newItem.sequence,
      insertions: newItem.insertions,
      deletions: newItem.deletions,
      operations: newItem.operations,
      statements: newItem.statements,
      rule: newItem.rule,
    };
    // Remove duplicates from top level
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
  } else if (newItem.question && typeof newItem.question === "object") {
    // Already object, ensure no duplicates
    if (newItem.context && !newItem.question.context) {
      newItem.question.context = newItem.context;
    }
    delete newItem.context;
    // ... similar for other fields
  }
  
  return newItem;
}

async function convertFile(inputPath, outputPath) {
  try {
    const content = fs.readFileSync(inputPath, 'utf-8');
    
    // Extract the data (assumes: const varName = [...]; export default varName)
    const match = content.match(/const\s+(\w+)\s*=\s*\[([\s\S]*)\]/);
    if (!match) {
      console.log(`Could not parse ${inputPath}`);
      return;
    }
    
    const varName = match[1];
    const dataStr = '[' + match[2] + ']';
    
    let data;
    try {
      data = eval(dataStr);
    } catch (e) {
      console.error(`Error evaluating data in ${inputPath}:`, e.message);
      return;
    }
    
    // Convert all items
    const converted = data.map(convertQuestion);
    
    // Generate new file content
    const newContent = `const ${varName} = ${JSON.stringify(converted, null, 2)};\n\nexport default ${varName};`;
    
    fs.writeFileSync(outputPath, newContent, 'utf-8');
    console.log(`✅ Converted ${inputPath} → ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

async function main() {
  const dataDir = path.join(__dirname, 'src', 'data');
  
  const filesToConvert = [
    { input: path.join(dataDir, 'questions.js'), output: path.join(dataDir, 'questions.js') },
    { input: path.join(dataDir, 'ktct1.js'), output: path.join(dataDir, 'ktct1.js') },
    { input: path.join(dataDir, 'ktct2.js'), output: path.join(dataDir, 'ktct2.js') },
    { input: path.join(dataDir, 'ktct3.js'), output: path.join(dataDir, 'ktct3.js') },
  ];
  
  for (const file of filesToConvert) {
    if (fs.existsSync(file.input)) {
      await convertFile(file.input, file.output);
    } else {
      console.log(`⚠️  File not found: ${file.input}`);
    }
  }
}

main().catch(console.error);
