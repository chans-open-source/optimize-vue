class Key {

  constructor (type, instance, defaultValue, condition) {
    this.type = type;
    this.instance = instance;
    this.defaultValue = defaultValue;
    this.condition = condition;
  }
}

export default {
  test: new Key(Boolean, 'isTest', false, param => param === '1')
};
