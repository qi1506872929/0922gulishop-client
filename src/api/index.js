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
