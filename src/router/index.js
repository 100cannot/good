import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
let Home = ()=>import('@/view/home')
let Shoop = ()=>import('@/view/shoop')
let Pice = ()=>import('@/view/pice')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:Home
    },{
      path:'/shoop',
      component:Shoop
    },{
      path:'/pice',
      component:Pice
    },{
      path:'*',
      redirect:'/home'
    }
  ]
})
