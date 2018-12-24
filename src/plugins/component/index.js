import Vue from 'vue';
import config from './config';

export default class Plugin {
  constructor () {
  }

  static install (Vue) {
    Object.keys(config).forEach(key => Vue.component(key, config[key]));
  }
}
Vue.use(Plugin);
