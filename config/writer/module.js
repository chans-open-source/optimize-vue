const path = require('path');
const FileUtils = require('../../utils/FileUtils');
const SINGLE = '\'';
const DOUBLE = '"';
const TEMPLATE = `<template>{{template}}</template><script>{{script}}</script><style lang="scss" scoped="true">{{style}}</style>`;

const readModuleFile = (filePath, ext) => {
  const file = `${filePath}module.${ext}`;
  const content = FileUtils.read(file).split('\n') || [];
  return content.join(`
`) || '';
};
const writeFile = (filePath, content) => {
  FileUtils.write(filePath, content);
};

const writeModuleFile = (moduleFile, parentDirPath) => {
  const lines = TEMPLATE// readModuleFile(MODULE_TEMPLATE, 'vue')
  .replace(/({{template}})/g, readModuleFile(parentDirPath, 'vue'))
  .replace(/({{script}})/g, readModuleFile(parentDirPath, 'js'))
  .replace(/({{style}})/g, readModuleFile(parentDirPath, 'scss'))
  .split('\r\n');
  lines.forEach((line, index) => {
    if (/(\.\/)/g.test(line)) {
      const s = line.split('./') || [];
      const length = s.length - 1;
      if (length > 0) {
        const singleLastIndex = line.lastIndexOf(SINGLE);
        const doubleLastIndex = line.lastIndexOf(DOUBLE);
        const isDouble = singleLastIndex < doubleLastIndex;
        const lastIndex = isDouble ? doubleLastIndex : singleLastIndex;
        const startIndex = line.lastIndexOf(isDouble ? DOUBLE : SINGLE, lastIndex - 1) + 1;
        const fullPath = line.substring(startIndex, lastIndex);
        const fixPath = '../' + FileUtils.fixPath(path.relative(path.resolve(__dirname, '../src/.modules'), path.resolve(parentDirPath, fullPath)), false);
        lines[index] = `${line.substr(0, startIndex)}${fixPath}${line.substr(lastIndex)}`;
      }
    }
  });
  writeFile(moduleFile, lines.join('\r\n'));
};

module.exports = writeModuleFile;
