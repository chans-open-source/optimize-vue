import VueModule from '../../libs/VueModule';
import co from 'co';

class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-index');
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Module.mapActions([]),
      /**
       * Vue.created中会默认调用该方法
       * */
      init () {
        this.request();
      },
      request () {
        co(function* () {
          const res = yield Module.$api.test();
          console.log(res);
        });
      }
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Module.mapGetters({})
    });
    // Vue.watch
    this.setWatch({});
  }

  // Vue.data = {
  //   return {};
  // }
  getData () {
    return {};
  }

  // Vue.created
  onCreate () {
    super.onCreate();
  }
}

export default new Module();
