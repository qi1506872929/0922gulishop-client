// import Home from '@/pages/Home'
// const Home = () => import('@/pages/Home')

// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import MyOrder from '@/pages/Center/MyOrder'
// import GroupOrder from '@/pages/Center/GroupOrder'

export default [{
        path: '/home',
        component: () => import('@/pages/Home'),
    },
    {
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
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
        component: () => import('@/pages/Login'),
        meta: {
            isHidden: true,
        },
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: {
            isHidden: true,
        },
    },
    {
        path: '/detail/:goodsId',
        component: () => import('@/pages/Detail'),
    },
    {
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 只有携带了skuNum和sessionStorage内部有skuIndo数据，才能看到添加购物车成功的界面
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuNum && skuInfo) {
                next()
            } else {
                alert('参数错误')
                // next('/')
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 只有从购物车界面才能跳转交易界面
            if (from.path === '/shopcart') {
                next()
            } else {
                alert('只有从购物车界面才能跳转交易界面')
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 只有从交易页面(创建订单)才能跳转支付页面
            if (from.path === '/trade') {
                next()
            } else {
                alert('只有从交易页面(创建订单)才能跳转支付页面')
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 只有支付页面才能跳转支付成功页面
            if (from.path === '/pay') {
                next()
            } else {
                alert('只有支付页面才能跳转支付成功页面')
                next(false)
            }
        }
    },
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        children: [{
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder')
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/GroupOrder')
            },
            {
                path: '',
                redirect: 'myorder'
            },
        ]
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [{
                path: 'event',
                component: () => import('@/pages/Communication/EventTest/EventTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'model',
                component: () => import('@/pages/Communication/ModelTest/ModelTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'sync',
                component: () => import('@/pages/Communication/SyncTest/SyncTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'children-parent',
                component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    isHideFooter: true
                },
            },
            {
                path: 'scope-slot',
                component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    isHideFooter: true
                },
            }
        ],
    },
]