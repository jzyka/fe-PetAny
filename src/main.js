import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueGlobalVar from "vue-global-var";

Vue.config.productionTip = false;

Vue.use(VueGlobalVar, {
  globals: {
    $api: "https://api.petanyindonesia.com/api",
    $storage: "https://api.petanyindonesia.com/storage",
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
