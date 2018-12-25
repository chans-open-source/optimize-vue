const { pages, port, baseUrl } = require('./config');
module.exports = {
  pages,
  baseUrl,
  devServer: {
    port,
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: []
  }
};
