import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: ()=>import('../views/Movie/index.vue'),
    children:[
      {
        path: 'city',
        component:()=>import('@/components/City')
      },
      {
        path: 'nowplaying',
        component:()=>import('@/components/NowPlaying')
      },
      {
        path: 'comingsoon',
        component:()=>import('@/components/ComingSoon')
      },
      {
        path: 'search',
        component:()=>import('@/components/Search')
      }
    ]
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: ()=>import('../views/Cinema/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: ()=>import('../views/My/index.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
