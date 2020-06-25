import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Dashboard from './components/Dashboard.vue'
import ShowDetail from './components/ShowDetail.vue'
import SearchResults from "./components/SearchResults.vue";

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/showdetail/:id', component: ShowDetail },
  { path: '/search', component: SearchResults },
  { path: '/', component: Dashboard } 
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
