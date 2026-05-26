const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'data', 'tree.js');
let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);

function findQuestionBlock(startIndex) {
  let level = 0;
  let inString = false;
  let stringChar = null;
  let escape = false;
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (escape) { escape = false; continue; }
      if (inString) {
        if (ch === '\\') { escape = true; continue; }
        if (ch === stringChar) { inString = false; stringChar = null; }
        continue;
      }
      if (ch === '"' || ch === "'") {
        inString = true;
        stringChar = ch;
        continue;
      }
      if (ch === '{') level += 1;
      if (ch === '}') {
        level -= 1;
        if (level === 0) return i;
      }
    }
  }
  return -1;
}

let i = 0;
let modified = false;
const output = [];
while (i < lines.length) {
  const line = lines[i];
  if (line.includes('"question"') && line.includes('{')) {
    const questionStart = i;
    const questionEnd = findQuestionBlock(questionStart);
    if (questionEnd !== -1) {
      const nextLineIndex = questionEnd + 1;
      if (nextLineIndex < lines.length && lines[nextLineIndex].trim().startsWith('"context"')) {
        // Collect context block
        const contextLines = [];
        let j = nextLineIndex;
        let backtickCount = 0;
        while (j < lines.length) {
          const cl = lines[j];
          contextLines.push(cl);
          backtickCount += (cl.match(/`/g) || []).length;
          if (backtickCount >= 2) {
            break;
          }
          j += 1;
        }
        if (backtickCount >= 2) {
          // append lines up to questionEnd-1 normally, then context inside question, then closing brace
          for (let k = questionStart; k < questionEnd; k++) {
            output.push(lines[k]);
          }
          // insert context inside question
          const firstContextLine = contextLines[0].replace(/^(\s*)"context"/, '$1"context"');
          output.push(firstContextLine);
          for (let k = 1; k < contextLines.length; k++) {
            output.push(contextLines[k]);
          }
          output.push(lines[questionEnd]);
          i = j + 1;
          modified = true;
          continue;
        }
      }
    }
  }
  output.push(line);
  i += 1;
}

fs.writeFileSync(file, output.join('\n'), 'utf8');
console.log('done', modified, 'lines', output.length);