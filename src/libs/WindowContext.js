import Class from './Class';

export default class WindowContext extends Class {
  static $w = window;

  constructor () {
    super();
  }
}
