import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export const constantRouterMap = [
  {path:'/login',component: () => import('@/views/login/index'),hidden:true}
]



export default new Router({
  routes: constantRouterMap
})
