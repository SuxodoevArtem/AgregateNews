import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '@/views/News.vue'),
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
    },
    {
        path: '/Analistics',
        name: 'Analistics',
        component: () => import('@/views/Analistics.vue'),
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;