const pages = require('./pages');
const port = 8080;
const baseUrl = process.env.NODE_ENV === 'production'
  ? '/p/'
  : '/d/';
module.exports = {
  pages, port, baseUrl
};
