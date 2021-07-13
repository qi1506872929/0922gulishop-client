<template>
  <div class="swiper-container" ref="bannerSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "",
  props: ["bannerList"],
  watch: {
    bannerList: {
      immediate: true, // 没用，为了封装组件添加
      handler() {
        this.$nextTick(() => {
          // 在最近的一次页面更新完成之后，执行 nextTick 当中传递的回调函数(只执行一次)，updated 中改变就会执行
          new Swiper(this.$refs.bannerSwiper, {
            // direction: "vertical", // 垂直切换选项，去掉默认水平切换
            loop: true, // 循环模式选项 --- 无缝

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>

<style lang='less' scoped>
</style>