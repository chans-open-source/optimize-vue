import Api from './options';
import Url from './url';
import Method from './method';
// 通用型缓存工具，
// import Storage from 'compatible-storage';

export default {
  test () {
    return new Api().setUrl(Url.TEST).setParams({
      t: Date.now()
    }).setMethod(Method.GET).request();
  }
};
