import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '@/store'

const service = axios.create({
    baseURL: '/api',
    timeout: 20000,
})

service.interceptors.request.use((config) => {
    NProgress.start();
    let userTempId = store.state.user.userTempId
    let token = store.state.user.token
    if (userTempId){ // 请求头添加临时ID
        config.headers.userTempId = userTempId
    }
    if (token){ // 请求头添加token
        config.headers.token = token
    }
    return config;
});

service.interceptors.response.use((response) => {
    NProgress.done();
    return response.data;
},(error) => {
    NProgress.done();
    alert('发送ajax请求失败' + error.message || '未知错误');
    // return Promise.reject(new error('发送ajax请求失败'));
    return new Promise(() => {})
});

export default service