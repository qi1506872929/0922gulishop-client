<template>
  <div>
    <!-- <el-button type="danger" icon="el-icon-delete"></el-button> -->
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-show="$route.path !== '/login' && $route.path !== '/register'"></Footer> -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    // this.$store.dispatch("getToStudent");
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style scoped>
</style>