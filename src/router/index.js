import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () =>
            import ('@/views/Articles.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('@/views/About.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/views/error-404.vue')
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router