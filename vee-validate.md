# 1. 说明

> vee-validate 是专门用来做表单验证的 vue 插件
> 我们当前用的是 2.x 的版本，最新的 3.x 版本使用比较麻烦
> github 地址: https://github.com/logaretm/vee-validate
> 内置校验规则: https://github.com/logaretm/vee-validate/tree/v2/src/rules
> 中文 messages: https://github.com/logaretm/vee-validate/blob/v2/locale/zh_CN.js

# 2. 使用

## 1). 引入

1. 下载: npm install -S vee-validate@2.2.15
2. 引入插件:

```js
import Vue from "vue";
import VeeValidate from "vee-validate ";
Vue.use(VeeValidate);
```

## 2). 基本使用

```html
<!-- 表单类元素中必须要使用 name 属性指定验证的字段名称 -->
<input
  placeholder="请输入你的手机号"
  v-model="phone"
  name="phone"
  v-validate="{ required: true, regex: /^1\d{10}$/ }"
  :class="{ invalid: errors.has('phone') }"
/>
<!-- 获取 phone 字段验证错误的提示信息 -->
<span class="error-msg">{{ errors.first("phone") }}</span>
```

`const success = await this.$validator.validateAll() //对所有表单项进行验证`

## 3). 提示文本信息本地化

```js
import VeeValidate from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN"; //引入中文message
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`, //修改内置规则的message},
  },
  attributes: {
    //给校验的field属性名映射中文名称
    phone: "手机号",
    code: "验证码",
  },
});
```

> 完整中文 message 源码: https://github.com/logaretm/vee-validate/blob/v2/locale/zh_CN.js

## 4). 自定义验证规则

```js
// 自定义校验规则
VeeValidate.Validator.extend("agree", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必须同意",
});
```
