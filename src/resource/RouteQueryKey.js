class Key {

  /**
   * @param type 参数类型String,Boolean,Number等
   * @param instance Vue中的属性名
   * @param defaultValue 默认值
   * @param condition 判断条件，当type===Boolean时有效
   * */
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
