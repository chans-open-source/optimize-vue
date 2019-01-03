import keys from './keys';

// 状态管理中的方法集
export default {
  setWindowSize({commit}, windowSize) {
    commit(keys.SET_WINDOW_SIZE, windowSize);
  }
};
