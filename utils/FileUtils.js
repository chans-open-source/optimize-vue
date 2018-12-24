const fs = require('fs');
const shell = require('shelljs');
const fixPath = (filePath, isDir = true) => filePath.replace(/\\/g, '/') + (isDir ? '/' : '');
const read = file => (fs.readFileSync(file, 'utf8') || '');
const write = (file, content) => {
  fs.writeFileSync(file, content, 'utf8');
};
const mkdir = filePath => {
  shell.mkdir('-p', filePath);
};
const rm = filePath => {
  shell.rm('-rf', filePath);
};
const isExist = filePath => fs.existsSync(filePath);
module.exports = {
  fixPath,
  read,
  write,
  mkdir,
  rm,
  isExist
};
