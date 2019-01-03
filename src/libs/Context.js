import BrowserUtils from '../utils/BrowserUtils';
import WindowContext from './WindowContext';
import Api from '../plugins/api';
import Storage from 'compatible-storage';

export default class Context extends WindowContext {

  // 浏览器操作工具
  static $browser = BrowserUtils;

  // 接口插件
  static $api = Api;

  // 缓存插件
  static $storage = Storage;

  constructor () {
    super();
  }
}
