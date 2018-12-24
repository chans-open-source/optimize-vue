const emmit = (app, action, value) => {
  return app.$store.dispatch(action, value);
};
export default {
  emmit
};
