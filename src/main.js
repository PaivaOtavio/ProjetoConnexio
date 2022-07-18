import Vue from "vue";
import App from "./App.vue";
import router from "@/core/router";
import store from "@/core/store";
import vuetify from "@/core/plugins/vuetify";
import auth from "@websanova/vue-auth/src/v2.js";
import AuthConfig from "@/core/plugins/websanova";
import axios from "axios";
import VueAxios from "vue-axios";
import VueIziToast from "vue-izitoast";
import "@/assets/styles/app.scss";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
Vue.use(VueAxios, axios);
Vue.use(VueIziToast, {
  position: "topRight",
});

Vue.use(auth, {
  ...AuthConfig,
  plugins: {
    http: Vue.axios,
    router,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
