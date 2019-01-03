import clone from 'clone';

export default class BaseClass {
  // 深度克隆方法，便于操作对象与数组
  static clone (object) {
    return clone(object);
  }

  // 执行可变长度参数的方法
  static action (act, ...data) {
    typeof act === 'function' && act(...data);
  }
}
