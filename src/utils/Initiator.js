import RouterUtils from './RouterUtils';
import VuexUtils from './VuexUtils';
import BrowserUtils from './BrowserUtils';
import WindowContext from '../libs/WindowContext';

const BASE_WIDTH = 750; // 24px = 1rem
const setStyle = (e, k, v) => {
  e.forEach(i => {
    window.document.getElementsByTagName(i)[0]['style'][k] = v;
  });
};
export default class Initiator extends WindowContext {

  static registerApp (app) {
    this.$app = app;
    this.$w.globalApp = app;
    RouterUtils.parseRoute(app);
    BrowserUtils.setAppOS(app);
    Initiator.setWindowSize();
  }

  static setWindowSize () {
    const { width, height } = this.$w.screen;
    setStyle(['html'], 'fontSize', `${width / BASE_WIDTH * 24}px`);
    setStyle(['html', 'body'], 'minHeight', `${height}px`);
    VuexUtils.emmit(this.$app, 'setWindowSize', {
      width,
      height
    }).then().catch();
    window.remScale = (window.fontSize = parseFloat(window.getComputedStyle(window.document.querySelector('html')).fontSize)) / 24;
  }
}
