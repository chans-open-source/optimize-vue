const GLOBAL = {};
export default {
  GLOBAL,
  '/index': {
    HomeLayout: () => import('../../components/home')
  }
};
