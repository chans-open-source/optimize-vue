// 全局设置
const GLOBAL = {};

export default {
  GLOBAL,
  // 每个路径单独设置组件
  '/index': {
    HomeLayout: () => import('../../components/home')
  }
};
