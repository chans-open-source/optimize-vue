import Vue from 'vue';
import config from './config';

export default class Plugin {
  constructor () {
  }

  static init (router) {
    const base = router.history.base;
    const pathname = window.location.pathname;
    let path = pathname.substr(base.length);
    if (path.endsWith('.html')) {
      path = path.replace(/\.html/g, '');
    } else if (path === '/') {
      path = '/index';
    }
    this.$config = config[path];
    if (!this.$config) {
      throw new Error(`Please configure path '${path}' component list.`);
    }
    Vue.use(Plugin);
  }

  static install (Vue) {
    Object.keys(config.GLOBAL).forEach(key => Vue.component(key, config.GLOBAL[key]));
    Object.keys(this.$config).forEach(key => Vue.component(key, this.$config[key]));
  }
}
