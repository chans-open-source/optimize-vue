import VueModule from '../../libs/VueModule';
import co from 'co';

class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-index');
    this.setProps([]);
    this.setComponent({});
    this.setMethod({
      ...Module.mapActions([]),
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
    this.setCompute({
      ...Module.mapGetters({})
    });
    this.setWatch({});
  }

  getData () {
    return {};
  }

  onCreate () {
    super.onCreate(this);
  }
}

export default new Module();
