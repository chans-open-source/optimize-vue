import Vue from 'vue';
import router from './plugins/router';
import store from './plugins/vuex';
import './plugins/component';
import './plugins/handler/error';
import Initiator from './utils/Initiator';

Vue.config.productionTip = false;

export default module => {
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
