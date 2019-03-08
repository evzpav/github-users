import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes';
import VueGoodTablePlugin from 'vue-good-table';
Vue.use(VueGoodTablePlugin);
import 'vue-good-table/dist/vue-good-table.css';

import VModal from 'vue-js-modal';

Vue.use(VModal);


const router = new VueRouter({
  routes,
  mode: 'history',
  base: "/app/"

});


Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
