<template>
  <div>
    <h2>BABA有存款: {{ money }}</h2>
    <button @click="borrowMoney1(100)">找小明借钱100</button><br />
    <button @click="borrowMoney2(150)">找小红借钱150</button><br />
    <button @click="borrowMoney3(200)">找所有孩子借钱200</button><br />

    <br />
    <Son ref="son" />

    <br />
    <Daughter ref="daughter" />
  </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";

export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },

  methods: {
    /* 
    找儿子小明借钱
    */
    borrowMoney1(count) {
      // 通过ref得到子组件对象
      const son = this.$refs.son;
      // 直接更新子组件的data数据
      son.money -= count;

      // 更新自己的数据
      this.money += count;
    },

    /* 
    找女儿小红借钱
    */
    borrowMoney2(count) {
      // this.$refs.dau.money -= count  // 得到子组件对象后直接更新其data数据
      this.$refs.daughter.pullMoney(count); // 得到子组件对象后调用其方法更新其数据
      this.money += count;
    },

    /* 
    找所有孩子借钱
    */
    borrowMoney3(count) {
      // 通过$children得到所有子组件对象
      this.$children.forEach((child) => {
        child.pullMoney(count);
        this.money += count;
      });
    },
  },

  components: {
    Son,
    Daughter,
  },
};
</script>

<style></style>
