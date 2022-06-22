import Vue from "vue";
import App from "./App.vue";
import { DefishUiKit, vuetify } from "./lib";
Vue.config.productionTip = false;
Vue.use(DefishUiKit)

window.$app = new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
