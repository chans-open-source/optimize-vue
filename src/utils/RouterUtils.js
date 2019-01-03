import isArray from 'isarray';
import RouteQueryKey from '../resource/RouteQueryKey';

const KEY_UNDEFINED = 'undefined';
const KEY_NULL = 'null';
export default class RouterUtils {

  // 获取Vue实例中的路由信息
  static routeQuery (app) {
    return (app.$route || {}).query || {};
  }

  // 获取有效参数
  static getValidParam (app, queryKey, defaultValue, routeQueryInfo) {
    const query = RouterUtils.routeQuery(app);
    let param = query[queryKey];
    if (isArray(param)) {
      param = param[param.length - 1];
    } else if ('object' === typeof param) {
      const keys = Object.keys(param);
      param = param[keys.length - 1];
    }
    param = ((KEY_UNDEFINED === typeof param || KEY_UNDEFINED === param || KEY_NULL === param) ? '' : param) || defaultValue;
    if (routeQueryInfo && 'function' === typeof routeQueryInfo.condition) {
      const condition = routeQueryInfo.condition;
      param = condition(param);
    }
    return param;
  }

  // 解析路由器参数
  static parseRoute (app) {
    const _RouteQueryKey = RouteQueryKey;
    Object.keys(RouteQueryKey).forEach(key => {
      const routeQuery = _RouteQueryKey[key];
      app[routeQuery.instance] = RouterUtils.getValidParam(app, key, routeQuery.defaultValue, routeQuery);
    });
  }
}
