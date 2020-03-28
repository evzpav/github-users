import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";

import VueGoodTablePlugin from "vue-good-table";
Vue.use(VueGoodTablePlugin);
import "vue-good-table/dist/vue-good-table.css";

import spacetime from "spacetime";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

const router = new VueRouter({
  routes,
  mode: "history",
  base: "/"
});

Vue.config.productionTip = false;

Vue.filter("formatDateTime", value => {
  return spacetime(value).format("numeric-uk");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
