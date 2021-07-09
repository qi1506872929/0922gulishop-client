// 模拟mock数据接口
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
import category from './category.json'
Mock.mock('/mock/banner', {
    code: 200,
    data: banner
}) // 第一个参数代表请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/floor', {
    code: 200,
    data: floor
}) // 第一个参数代表请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/category', {
    code: 200,
    data: category
}) // 第一个参数代表请求的路径，第二个参数代表返回的数据