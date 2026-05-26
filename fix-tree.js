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
const newLines = [];
while (i < lines.length) {
  const line = lines[i];
  newLines.push(line);
  if (line.includes('"question"') && line.includes('{')) {
    const questionStartLine = i;
    const questionEndLine = findQuestionBlock(i);
    if (questionEndLine === -1) break;
    const nextLineIndex = questionEndLine + 1;
    if (nextLineIndex < lines.length && lines[nextLineIndex].trim().startsWith('"context"')) {
      // Move context lines into question block
      const contextLines = [];
      let contextLineIndex = nextLineIndex;
      let foundEnd = false;
      while (contextLineIndex < lines.length) {
        const contextLine = lines[contextLineIndex];
        contextLines.push(contextLine);
        if (contextLine.trim().endsWith('`,') || contextLine.trim().endsWith('`') && contextLine.trim().endsWith('`')) {
          if (contextLine.trim().endsWith('`,') || contextLine.trim().endsWith('`')) {
            if (contextLine.trim().endsWith('`,') || contextLine.trim() === '`' || contextLine.trim().endsWith('`')) {
              // if this is closing backtick line
              if (contextLine.trim().endsWith('`,') || contextLine.trim() === '`' || contextLine.trim().endsWith('`')) {
                // We still need to check if not the opening line itself. Use count of backticks?
              }
            }
          }
        }
        if (contextLine.includes('`') && contextLines.length > 1) {
          // Naive binding: if this text line contains closing backtick after the first line, treat as end
          const backtickCount = (contextLines.join('\n').match(/`/g) || []).length;
          if (backtickCount >= 2) {
            foundEnd = true;
            break;
          }
        }
        contextLineIndex += 1;
      }
      if (!foundEnd && contextLines.length > 0) {
        // fallback: just take one line
        contextLineIndex = nextLineIndex;
      }
      const insertIndex = questionEndLine;
      // remove remaining line(s) from output after questionEndLine that were already added
      while (newLines.length > 0 && newLines[newLines.length-1] !== lines[questionEndLine]) {
        newLines.pop();
      }
      // Insert question lines up to before closing brace
      for (let j = questionStartLine; j <= questionEndLine - 1; j++) {
        if (j !== questionStartLine) newLines.push(lines[j]);
      }
      // Add context into question before closing brace
      const contextStringLines = contextLines.map((ln, idx) => {
        if (idx === 0) return ln.replace(/^\s*"context"\s*:/, '      "context":');
        return ln;
      });
      // remove original questionEndLine from newLines if duplicate
      if (newLines[newLines.length-1] === lines[questionEndLine - 1]) {
        // fine
      }
      // push context lines
      for (const ln of contextStringLines) {
        newLines.push(ln);
      }
      // push closing brace line
      newLines.push(lines[questionEndLine]);
      i = contextLineIndex + 1;
      modified = true;
      continue;
    }
  }
  i += 1;
}

fs.writeFileSync(file, newLines.join('\n'), 'utf8');
console.log('done', modified);
