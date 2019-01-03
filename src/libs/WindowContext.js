import Class from './Class';

export default class WindowContext extends Class {

  // 浏览器的window实例
  static $w = 'undefined' === typeof window ? undefined : window;

  constructor () {
    super();
  }
}
