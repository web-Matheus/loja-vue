import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarrinhoView.vue')
  },
  {
    path:'/masculino',
    name:'masculino',
    component:()=> import('../views/masculino.vue')
  },
  {
    path:'/feminino',
    name:'feminino',
    component:()=> import('../views/feminino.vue')
  },
  {
    path:'/joias',
    name:'joias',
    component: () => import('../views/joias.vue')
  },
  {
    path:'/eletronicos',
    name:'eletronicos',
    component: ()=> import('../views/eletronicos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
