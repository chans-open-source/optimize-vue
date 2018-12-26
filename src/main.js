import Vue from 'vue';
import router from './plugins/router';
import store from './plugins/vuex';
import component from './plugins/component';
import './plugins/handler/error';
import Initiator from './utils/Initiator';

Vue.config.productionTip = false;

export default module => {
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
