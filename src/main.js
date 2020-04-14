import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/normalize.css'
import lcxUi from './components/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(lcxUi);

Vue.config.productionTip = false;
// Toast();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
