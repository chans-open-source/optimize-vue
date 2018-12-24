import Context from './Context';
import { mapActions as actions, mapGetters as getter } from 'vuex';
import RouterUtils from '../utils/RouterUtils';
import BrowserUtils from '../utils/BrowserUtils';

const DEFAULT_MODULE_NAME = 'ModuleLayout';
export default class VueModule extends Context {
  static mapActions = actions;
  static mapGetters = getter;

  constructor () {
    super();
    const self = this;
    this.$app = undefined;
    this.name = DEFAULT_MODULE_NAME;
    this.props = [];
    this.watch = {};
    this.methods = {};
    this.components = {};
    this.computed = {
      ...getter({
        windowWidth: 'windowWidth',
        windowHeight: 'windowHeight'
      })
    };
    this.data = function () {
      self.$app = this;
      return self.getData();
    };
    this.created = function () {
      self.$app = this;
      self.onCreate();
    };
    this.mounted = function () {
      self.onMount();
    };
    this.updated = function () {
      self.onUpdate();
    };
  }

  setProps (props = []) {
    props.forEach(p => this.props.push(p));
  }

  getData () {
    return {};
  }

  onCreate () {
    VueModule.action(RouterUtils.parseRoute, this.$app);
    VueModule.action(BrowserUtils.setAppOS, this.$app);
    this.nextTick(VueModule.action(this.$app.init));
  }

  onMount () {
  }

  onUpdate () {
  }

  setWatch (options = {}) {
    Object.keys(options).forEach(w => this.watch[w] = options[w]);
  }

  setMethod (options = {}) {
    Object.keys(options).forEach(m => this.methods[m] = options[m]);
  }

  setComponent (options = {}) {
    Object.keys(options).forEach(c => this.components[c] = options[c]);
  }

  setCompute (options = {}) {
    Object.keys(options).forEach(c => this.computed[c] = options[c]);
  }

  setModuleName (name = DEFAULT_MODULE_NAME) {
    this.name = name;
  }

  nextTick (cb) {
    VueModule.action(this.$app.$nextTick, cb);
  }
}
