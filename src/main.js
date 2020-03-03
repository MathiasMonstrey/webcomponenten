import Vue from 'vue'
import App from './App.vue'

import * as WebComponents from "@govflanders/vl-ui-vue-components";
Vue.use(WebComponents);

Vue.config.productionTip = false

Promise.resolve().finally(() => { console.log("joepie") })

new Vue({
  render: h => h(App),
}).$mount('#app')
