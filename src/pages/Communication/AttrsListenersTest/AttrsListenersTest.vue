<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>

    <!-- 
    <a href="javascript:" title="添加">
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="add"></el-button>
    </a> 
    <a href="javascript:" title="修改">
      <el-button type="info" icon="el-icon-edit" size="mini" @click="update"></el-button>
    </a>

    <a href="javascript:" title="删除">
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="remove"></el-button>
    </a>
    -->

    <HintButton title="添加" type="primary" icon="el-icon-plus" size="mini" @click="add" @xxx="add"></HintButton>
    <!-- 
      绑定dblclick双击监听:
          如果不指定.native, 绑定的是vue自定义事件监听, 
          而el-button内部并没有给button绑定dblclick事件和分发自定义dblclick事件  ==> 不可以

          如果指定.native, 绑定的是原生事件监听到组件的根元素a上
          双击button, 由于事件冒泡, 会触发双击事件, 从而调用双击监听回调函数   ==> 可以
    -->
    <HintButton title="添加" type="primary" icon="el-icon-plus" size="mini" @dblclick.native="add2"></HintButton>
    <HintButton title="修改" type="info" icon="el-icon-edit" size="mini" @click="update"></HintButton>
    <HintButton title="删除" type="danger" icon="el-icon-delete" size="mini" @click="remove"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
  import HintButton from './HintButton'
  export default {
    name: 'AttrsListenersTest',

    methods: {
      add () {
        alert('add')
      },
      add2 () {
        alert('双击 add')
      },
      update () {
        alert('update')
      },
      remove () {
        alert('remove')
      },

    },

    components: {
      HintButton
    }
  }
</script>
