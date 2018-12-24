import BrowserUtils from '../utils/BrowserUtils';
import WindowContext from './WindowContext';
import Api from '../plugins/api';
import Storage from 'compatible-storage';

export default class Context extends WindowContext {

  static $browser = BrowserUtils;
  static $api = Api;
  static $storage = Storage;

  constructor () {
    super();
  }
}
