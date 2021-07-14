<template>
  <div>
    小明的爸爸现在有{{money}}元
    <br>
    <br>
    <h2>不使用sync</h2>
    <Child :money="money" @update:money="money=$event"></Child>

    <br>
    <br>
    <h2>使用sync</h2>
    <Child :money.sync="money"></Child>

    <br>
    <br>
    <h2>使用v-model</h2>
    <Child2 v-model="money"/>
  </div>
</template>

<script type="text/ecmascript-6">
/* 
需求: 假设这么一个场景：假设小明的父亲有1000块钱，小明点击一次花钱按钮就花掉他爸的100。
*/
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data () {
      return {
        money: 1000
      }
    },
    components: {
      Child,
      Child2
    }
  }
</script>
