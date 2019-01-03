import VueComponent from '../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-home');
    // Vue.props
    this.setProps([]);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions([])
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({})
    });
    // Vue.watch
    this.setWatch({});
  }

  // Vue.data = {
  //   return {};
  // }
  getData () {
    return {
      title: 'Home 首页'
    };
  }

  // Vue.created
  onCreate () {
    super.onCreate(this);
  }
}

export default new Component();
