import Vue from 'vue';

export default class Plugin {
  constructor () {
  }

  static install (Vue) {
    // 全局异常处理
    Vue.config.errorHandler = function (err, vm, info) {
      console.group('Error Handler:');
      console.log(this);
      console.error(err);
      console.log('Instance:', vm);
      console.info(info);
      console.groupEnd();
    };
  }
}

Vue.use(Plugin);
