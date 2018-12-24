import clone from 'clone';

export default class BaseClass {
  static clone (object) {
    return clone(object);
  }

  static action (act, ...data) {
    typeof act === 'function' && act(...data);
  }
}
