import keys from './keys';

export default {
  setWindowSize({commit}, windowSize) {
    commit(keys.SET_WINDOW_SIZE, windowSize);
  }
};
