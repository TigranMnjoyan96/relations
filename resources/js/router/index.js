import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home')
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('../components/About')
    }
]


const router = new VueRouter({
    routes
})


export default router
