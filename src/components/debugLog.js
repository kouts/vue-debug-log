import DebugLog from '@/components/DebugLog.vue';

export default {
  install(Vue) {
    const div = document.createElement('div');
    div.id = 'debug-console';
    document.body.appendChild(div);
    const ComponentClass = Vue.extend(DebugLog);
    const instance = new ComponentClass().$mount('#' + div.id);
    instance._props.log = [];

    Vue.prototype.debugLog = function(arg1, arg2) {
      const toLog = {
        name: typeof arg1 === 'string' && arg2 ? arg1 : '',
        data: arg2 || arg1
      };
      instance._props.log.push(toLog);
    };
  }
};
