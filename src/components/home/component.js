import VueComponent from '../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-home');
    this.setProps([]);
    this.setComponent({});
    this.setMethod({
      ...Component.mapActions([])
    });
    this.setCompute({
      ...Component.mapGetters({})
    });
    this.setWatch({});
  }

  getData () {
    return {
      title: 'Home 首页'
    };
  }

  onCreate () {
    super.onCreate(this);
  }
}

export default new Component();
