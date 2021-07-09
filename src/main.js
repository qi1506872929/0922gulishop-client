import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'swiper/css/swiper.css' // 引入swiper的css

import '@/mock/mockServer' // 引入mockServer，让模拟的接口生效

Vue.config.productionTip = false

// import {reqCategoryList} from '@/api'
// reqCategoryList();
// import {toStudent} from '@/api'
// toStudent();

import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
// 全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){ // 安装全局事件总线
        Vue.prototype.$bus = this;
    },
    router,
    store,
})