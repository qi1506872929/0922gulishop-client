import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './routes'
import store from '@/store'

const originPush = VueRouter.prototype.push; // 将原有的push方法地址保存，后面还能找到
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onResolved, onRejected) { // 修改原型的push
    // location就是调用this.$router.push传递的对象
    if (onResolved === undefined && onRejected === undefined) {
        // 调用的时候只传递了匹配路由对象，没有传递成功或失败的回调
        return originPush.call(this, location).catch(() => {});
    } else { // 调用的时候传递了成功或失败的回调，或者都有
        return originPush.call(this, location, onResolved, onRejected);
    }
}

VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => {});
    } else {
        return originReplace.call(this, location, onResolved, onRejected);
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior() { // 配置滚动行为，跳转路由之后的位置
        return {
            x: 0,
            y: 0
        }
    }
})

// 注册全局前置导航守卫，用来对 token 校验(根据 token 获取用户信息)
router.beforeEach(async (to, from, next) => {
    // to: 目标的路由route对象 from: 当前的路由route对象 next: 用来控制路由跳转的函数
    //   next(): 不传参数, 代表放行
    //   next(path): 传入路径, 代表强制跳转到指定path的路由
    //   next(false): 设么都不做，原地不动
    //   不调用next(): 代表不放行 (没有跳转的效果, 看不到目标界面)
    let token = store.state.user.token
    let userInfo = store.state.user.userInfo.name
    if (token){ 
        // 如果token存在
        if (to.path === '/login'){
            // 用户已经登陆了还要去登录页面，直接返回首页
            next('/')
        } else {
            // 用户已经登陆了，跳转其他页面，查看是否获取到用户信息
            if (userInfo){  
                // 如果用户信息存在，无条件放行
                next()
            } else {
                // 如果用户信息不存在，根据token获取用户信息
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // 获取不到用户信息，证明token过期，清空token，返回登录界面
                    store.dispatch('clearToken')
                    next('/login')
                }
            }
        }
    } else {
        let targetPath = to.path
        // 用户未登录过，访问(交易相关、支付相关、用户中心相关)需要跳转登录页面
        if (targetPath.indexOf('/trade') !== -1 || targetPath.indexOf('/pay') !== -1 || targetPath.startsWith('/center')){
            // 登陆之后要跳转之前无法跳转的页面，所以要跳转登录页面，同时加上之前想要跳转的地址
            next(`/login?redirect=${targetPath}`)
        }else {
            // 不登录的也能访问的页面，直接放行
            next()
        }
    }
})

export default router