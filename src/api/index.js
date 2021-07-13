// 接口函数

import request from './ajax'
import mockAjax from './mockAjax'

export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })
    // 模拟mock数据
    // return mockAjax({
    //     url: '/category',
    //     method: 'get',
    // })
}

export const reqToStudent = () => {
    return request({
        url: '/Student/findStudent',
        method: 'get',
        params: {
            page: 1,
            rows: 10,
        }
    })
}

// 模拟mock数据
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'get',
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'get',
    })
}

// 请求search页面数据
export const reqSearchInfo = (searchParams) => {
    return request({
        url: '/list',
        method: 'post',
        data: searchParams,
    })
}

// 请求详情页面数据
export const reqDetailInfo = (skuId) => {
    return request({
        url: `/item/${skuId}`,
        method: 'get',
    })
}

// 添加购物车 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post',
    })
}

// 获取购物车列表
// /api/cart/cartList
export const reqShopCartInfo = () => {
    return request({
        url: '/cart/cartList',
        method: 'get'
    })
}

// 切换商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCartIscheck = (skuId, isChecked) => {
    return request({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get',
    })
    
}

// 删除购物车商品
// /api/cart/deleteCart/{skuId}
export const reqDeleteShopCart = (skuId) => {
    return request({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

// 注册用户
// /api/user/passport/register
// 参数  phone password code
export const reqUserRegister = (userInfo) => {
    return request({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo,
    })
}

// 注册用户
// /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => {
    return request({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get',
    })
}

// 获取登录 token
// /api/user/passport/login
export const reqUserLogin = (userInfo) => {
    return request({
        url: '/user/passport/login',
        method: 'post',
        data: userInfo,
    })
}

// 获取用户信息
// /api/user/passport/auth/getUserInfo
export const reqGetUserInfo = () => {
    return request({
        url: '/user/passport/auth/getUserInfo',
        method: 'get',
    })
}

// 退出登录
// /api/user/passport/logout
export const reqUserLogOut = () => {
    return request({
        url: '/user/passport/logout',
        method: 'get',
    })
}

// 请求获取用户的收货地址信息
// /api/user/userAddress/auth/findUserAddressList
export const reqUserAddress = () => {
    return request({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get',
    })
}

// 请求获取订单交易页面信息
// /api/order/auth/trade
export const reqTradeInfo = () => {
    return request({
        url: '/order/auth/trade',
        method: 'get',
    })
}

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, tradeInfo) => {
    return request({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data: tradeInfo,
    })
}

// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => {
    return request({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get',
    })
}

// 查询支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => {
    return request({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get',
    })
}

// 获取我的订单列表
// /api/order/auth/{page}/{limit}
export const reqMyOrderInfo = (page, limit) => {
    return request({
        url: `/order/auth/${page}/${limit}`,
        method: 'get',
    })
}