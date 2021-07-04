import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
        },
        {
            path: '/search',
            component: Search,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ]
})

export default router