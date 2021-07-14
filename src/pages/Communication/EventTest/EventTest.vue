<template>
  <div>
    <h1>EventTest组件</h1>

    <!-- 
      绑定原生事件监听的2种情况: 
          html标签上dom事件名监听 
          组件标签上带.native的dom事件名监听

      $event就是我们平时说的事件对象event, 更准确的说应该是 '事件数据对象'
      用户操作界面, 浏览器自动分发事件时, 传递的数据就是事件数据对象, 也就是$event
      默认传给事件回调函数的就是$event
      $event包含事件相关数据属性(target/offsetX/offsetY/keyCode)
    -->
    <button @click="test1">测试原生DOM事件</button><br>
    <button @click="test1($event)">测试原生DOM事件2</button>
    <br>
    <br>
    <Event1 @click.native="test2"></Event1>
    
    <!-- 
      绑定自定义事件监听:
          只能在组件标签上
          可以是任意事件名称

      $event就是 '自定义事件数据'
      执行$emit(eventName, data)分发事件, 第二个参数指定的自定义事件数据, 也就是$event
      默认传给事件回调函数的就是$event
      $event不一定是对象, 可以是任意类型
    -->
    <br>
    <br>
    <Event2 @click="test3" @xxx="test3($event)"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',
    components: {
      Event1,
      Event2,
    },
    methods: {
     test1 (event) {
       alert(event.target.innerHTML)
     },
     test2 (event) {
       alert(event.target.innerHTML)
     },
     test3 (data) {
       alert(data)
     },
    }
  }
</script>
