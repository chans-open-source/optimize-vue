import Vue from 'vue';
// 路由插件
import router from './plugins/router';
// 状态管理插件
import store from './plugins/vuex';
// 组件管理插件
import component from './plugins/component';
// 异常处理器插件
import './plugins/handler/error';
// Vue实例初始化工具
import Initiator from './utils/Initiator';

Vue.config.productionTip = false;

export default module => {
  // 初始化组件管理插件
  component.init(router);
  const app = new Vue({
    router,
    store,
    render: h => h(module),
    beforeCreate () {
      Initiator.registerApp(this);
    }
  });
  app.$mount('#app');
  return app;
};
