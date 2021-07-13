import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'swiper/css/swiper.css' // 引入swiper的css

import '@/mock/mockServer' // 引入mockServer，让模拟的接口生效

import * as API from '@/api'

import { Button, MessageBox, Message } from 'element-ui';
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载，在没有得到图片前先显示loading的图片
Vue.use(VueLazyload, { // 内部自定义了一个指令 lazy
    loading, // 指定未加载得到图片之前的loading图片
})

import '@/utils/validate' // 引入vee-validate相关配置

Vue.config.productionTip = false

// import {reqCategoryList} from '@/api'
// reqCategoryList();
// import {toStudent} from '@/api'
// toStudent();

import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
// 全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
Vue.component('Pagination', Pagination)


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this; // 安装全局事件总线
        Vue.prototype.$API = API;
    },
    router,
    store,
})