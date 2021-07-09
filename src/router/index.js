import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

const originPush = VueRouter.prototype.push; // 将原有的push方法地址保存，后面还能找到
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onResolved, onRejected) { // 修改原型的push
    // location就是调用this.$router.push传递的对象
    if (onResolved === undefined && onRejected === undefined) {
        // 调用的时候只传递了匹配路由对象，没有传递成功或失败的回调
        return originPush.call(this, location).catch(() => {});
    } else { // 调用的时候传递了成功或失败的回调，或者都有
        return originPush.call(this, location, onResolved, onRejected);
    }
}

VueRouter.prototype.replace = function(location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => {});
    } else {
        return originReplace.call(this, location, onResolved, onRejected);
    }
}


const router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            props(route) {
                return {
                    keyword: route.params.keyword,
                    // keyword1: route.query.keyword1
                }
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHidden: true,
            },
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isHidden: true,
            },
        },
        {
            path: '/',
            redirect: '/home',
        },
    ]
})

export default router