const path = require('path');
const FileUtils = require('../utils/FileUtils');
const ENV = process.env.NODE_ENV || 'development';
const IS_DEV = ENV === 'development';
const ROOT_PATH = FileUtils.fixPath(path.resolve(__dirname, '../'));
const SRC_PATH = FileUtils.fixPath(path.resolve(ROOT_PATH, 'src'));
const ENTRY_ROOT = FileUtils.fixPath(path.resolve(SRC_PATH, `.entry/${ENV}`));
module.exports = {
  ENV,
  IS_DEV,
  ROOT_PATH,
  SRC_PATH,
  ENTRY_ROOT
};
