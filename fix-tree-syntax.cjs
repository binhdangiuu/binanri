const fs = require('fs');
const path = 'src/data/tree.js';
const text = fs.readFileSync(path, 'utf8');
const newText = text.replace(/("main": "[^"]*")\r?\n(\s*"context":)/g, '$1,\n$2');
if (newText !== text) {
  fs.writeFileSync(path, newText, 'utf8');
  console.log('fixed');
} else {
  console.log('no change');
}
