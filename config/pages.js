const glob = require('glob');
const path = require('path');
const md5 = require('md5');
const writer = require('./writer');
const FileUtils = require('../utils/FileUtils');
const { SRC_PATH, ENTRY_ROOT } = require('./env');
const configFile = glob.sync(path.resolve(SRC_PATH, 'modules/**/module.config.js'));

const pages = {};

class Page {
  constructor (entry, entryJs, title, moduleFile, parentDirPath) {
    this.template = 'public/index.html';
    this.entry = entryJs;
    this.title = title;
    this.filename = `${entry}.html`;
    this.chunks = ['chunk-vendors', 'chunk-common', entry];
    this.moduleInfo = {
      file: moduleFile,
      parent: parentDirPath
    };
    this.title = {
      a: title,
      b: new Date().toLocaleString()
    };
    writer.writeEntry(entryJs, moduleFile);
  }
}

FileUtils.rm(ENTRY_ROOT.endsWith('/') ? ENTRY_ROOT.substr(0, ENTRY_ROOT.length - 1) : ENTRY_ROOT);

configFile.forEach(filePath => {
  const config = require(filePath);
  const _path = config.path;
  const _title = config.title;
  const entry = _path.startsWith('/') ? _path.substr(1) : _path;
  const parentDirPath = FileUtils.fixPath(path.resolve(filePath, '../'));
  const key = md5(entry);
  const moduleDir = `${ENTRY_ROOT}${key}/`;
  FileUtils.mkdir(moduleDir);
  const moduleFile = `${parentDirPath}module.vue`;
  const entryFile = `${moduleDir}module.js`;
  pages[entry] = new Page(entry, entryFile, _title, moduleFile, parentDirPath);
});

module.exports = pages;
