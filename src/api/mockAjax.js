import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/mock',
    timeout: 20000,
})

service.interceptors.request.use((config) => {
    NProgress.start();
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