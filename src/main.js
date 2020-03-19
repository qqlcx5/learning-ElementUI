import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Toast from "./components/toast/Toast";

Vue.config.productionTip = false;
// Toast();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
