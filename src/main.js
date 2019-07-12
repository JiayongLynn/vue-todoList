import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ItemList from "./components/ItemList"
import Hello from "./components/HelloWorld"
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {path:'/',component:ItemList},
  {path:'/undo',component:ItemList},
  {path:'/finished',component:ItemList}
]
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  mode: 'history'
})
const vue = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

window.addEventListener('load', function () {
  if (vue.$route.path !== '/') { // /date 表示日期选择路由
      vue.$router.replace('/') // 列表页面的路由
  }
})
