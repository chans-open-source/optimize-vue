const moduleWriter = require('./module');
const entryWriter = require('./entry');

module.exports = {
  writeModule: moduleWriter,
  writeEntry: entryWriter
};
