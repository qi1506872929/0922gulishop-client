<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <!-- 
        此处显示什么内容由父组件来传递过来?: 使用插槽<slot>
        但父组件传递什么样的内容由当前子组件的数据来决定?: 
            利用作用域插槽技术向父组件传递数据
            给slot指定的属性都会传递给父组件
      -->
      <slot :row="item" :$index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: Array,
  },
};
</script>
