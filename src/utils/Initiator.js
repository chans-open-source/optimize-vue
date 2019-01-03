import RouterUtils from './RouterUtils';
import VuexUtils from './VuexUtils';
import BrowserUtils from './BrowserUtils';
import WindowContext from '../libs/WindowContext';

// UI图宽度标准(iPhone 6 宽度)
const BASE_WIDTH = 750; // 24px = 1rem

/**
 * 设置样式
 * @param e DOM节点
 * @param k 样式键
 * @param v 样式值
 * */
const setStyle = (e, k, v) => {
  e.forEach(i => {
    window.document.getElementsByTagName(i)[0]['style'][k] = v;
  });
};

/**
 * 从可变参数中获取大于0的最小值
 * eg: min(1, 2, 3, 0); return 1;
 * */
const min = function () {
  const length = arguments.length;
  let min = arguments[0];
  for (let i = 0; i < length; i++) {
    const arg = arguments[i];
    if (arg > 0) {
      min = Math.min(min, arg);
    }
  }
  return min;
};

export default class Initiator extends WindowContext {

  // 初始化Vue实例
  static registerApp (app) {
    this.$app = app;
    this.$w.globalApp = app;
    RouterUtils.parseRoute(app);
    BrowserUtils.setAppOS(app);
    Initiator.setWindowSize();
  }

  static setWindowSize () {
    const { screen, innerHeight, innerWidth, outerHeight, outerWidth } = this.$w;
    const { width, height, availHeight, availWidth } = screen;
    const _width = min(innerWidth, outerWidth, width, availWidth);
    const _height = min(innerHeight, outerHeight, height, availHeight);
    setStyle(['html'], 'fontSize', `${_width / BASE_WIDTH * 24}px`);
    setStyle(['html', 'body'], 'minHeight', `${_height}px`);
    VuexUtils.emmit(this.$app, 'setWindowSize', {
      width: _width,
      height: _height
    }).then().catch();
    window.remScale = (window.fontSize = parseFloat(window.getComputedStyle(window.document.querySelector('html')).fontSize)) / 24;
  }
}
