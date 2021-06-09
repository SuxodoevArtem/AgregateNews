import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '@/views/News.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
        meta: { requiresAuth: true } 
    },
    {
        path: '/Analistics',
        name: 'Analistics',
        component: () => import('@/views/Analistics.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
        meta: { requiresAuth: false } 
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresAuth: false } 
    },
]
    
const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token')) {
          next()
          return
        }
        next('/Login') 
      } else {
        next() 
      }
})

export default router;