<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="name"> 
    <span>{{name}}</span>
    <br>
    <br>
    <!-- 
      v-model在input标签上的本质:
          <input type="text" :value="name2" @input="name2=$event.target.value">
    -->
    <input type="text" :value="name2" @input="name2=$event.target.value"> 
    <span>{{name2}}</span>
    <br>
    <br>
    <!-- 
      v-model在组件标签上的本质:
          父组件: 
              <CustomInput :value="name4" @input="name4 = $event"/>
          子组件:
              props: ['value']
              <input type="text" :value="value" @input="$emit('input', $event.target.value)">
      v-model能做什么?
          1. v-model不仅能实现原生标签的双向数据绑定, 也能实现组件标签的双向数据绑定
          2. 方便父组件与子组件相互通信(传值)
          3. elment-ui中的Input组件就封装了v-model
    -->
    <CustomInput v-model="name3"/>
    <span>{{name3}}</span>
    <br>
    <br>

    <CustomInput :value="name4" @input="name4 = $event"/>
    <span>{{name4}}</span>
    <br>
    <br>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data () {
      return {
        name: 'atguigu',
        name2: 'haha',
        name3: 'mingming',
        name4: 'huahua'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
