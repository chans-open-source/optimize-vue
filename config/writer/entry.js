const path = require('path');
const { SRC_PATH, ENTRY_ROOT } = require('../env');
const FileUtils = require('../../utils/FileUtils');
const ROOT = `${ENTRY_ROOT}/x/`;
const MAIN_RELATIVE_PATH = FileUtils.fixPath(path.relative(ROOT, SRC_PATH));
const writeFile = (filePath, content) => {
  FileUtils.write(filePath, content);
};
const writeEntryContent = (entryFile, moduleFile) => {
  const module = FileUtils.fixPath(path.relative(ROOT, moduleFile), false);
  writeFile(entryFile, `import App from '${MAIN_RELATIVE_PATH}main';
import Module from '${module}'
App(Module);`);
};
module.exports = writeEntryContent;
