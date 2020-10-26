import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import debugLog from '@/components/debugLog';
import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.use(debugLog);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
