const pages = require('./pages');
const port = 8080; // 测试环境端口
const baseUrl = process.env.NODE_ENV === 'production'
  ? '/p/' // 生产环境的子路径
  : '/d/'; // 开发环境的子路径
module.exports = {
  pages, port, baseUrl
};
