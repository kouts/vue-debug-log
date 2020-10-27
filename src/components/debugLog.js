import DebugLog from '@/components/DebugLog.vue';

export default {
  install(Vue) {
    const div = document.createElement('div');
    div.id = 'debug-console';
    document.body.appendChild(div);
    const ComponentClass = Vue.extend(DebugLog);
    const instance = new ComponentClass().$mount('#' + div.id);
    instance._props.log = [];

    window.debugLog = function(...args) {
      const name = typeof args[0] === 'string' && args.length > 1 ? args[0] : '';
      if (name) {
        args.shift();
      }
      for (let index = 0; index < args.length; index++) {
        const toLog = {
          name: index === 0 && name ? name : '',
          data: args[index]
        };
        instance._props.log.push(toLog);
      }
    };

    // Override console.log in case first argument starts with "debug:"
    const orig = window.console.log;
    window.console.log = function(...args) {
      if (args.length > 1 && typeof args[0] === 'string' && args[0].startsWith('debug:')) {
        window.debugLog(...args);
      } else {
        orig.apply(window.console, args);
      }
    };
  }
};
