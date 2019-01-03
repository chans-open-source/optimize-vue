import Vue from 'vue';
import config from './config';

export default class Plugin {
  constructor () {
  }

  // 初始化组件管理插件
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
    if (!this.$config) { // 如果没有为该路径设置组件，则抛出异常
      throw new Error(`Please configure path '${path}' component list.`);
    }
    Vue.use(Plugin);
  }

  static install (Vue) {
    // 注册全局组件
    Object.keys(config.GLOBAL).forEach(key => Vue.component(key, config.GLOBAL[key]));
    // 注册该路径配置的组件
    Object.keys(this.$config).forEach(key => Vue.component(key, this.$config[key]));
  }
}
