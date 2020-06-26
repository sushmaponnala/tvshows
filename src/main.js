import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueRouter)

Vue.config.productionTip = false

//route lazy loading
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue')
const ShowDetail = () => import(/* webpackChunkName: "showdetail" */ './components/ShowDetail.vue')
const SearchResults = () => import(/* webpackChunkName: "searchresults" */ './components/SearchResults.vue')


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
