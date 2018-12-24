const { pages, port } = require('./config');
module.exports = {
  pages,
  devServer: {
    port,
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: []
  }
};
