## 1

1. 路由组件和非路由组件的区别

   > 使用都是三大步 定义 注册 使用
   > 定义 定义都一样，只是存放的文件夹不同
   > 注册 非路由组件是注册在要使用的组件中 路由组件要注册在路由配置中
   > 使用 非路由组件使用注册的组件标签 路由组件使用声明式导航(router-link, router-view)和编程式导航(push replace)
   > 生命周期不同 路由组件切换时会销毁重建(keep-alive)，而非路由不会

# 21-07-10

1. 修改 search 页面的 push 为 replace，达到一步回退到 home 页面

2. 去掉发送请求的为空的请求条件

- 赋值给 this.searchParams 之前，最好是把属性值为空串的属性干掉
  for 循环 for..in forEach for...of
  for 循环是 js 当中最简单的遍历方法 主要是针对数组进行遍历的，效率不高，但是可以使用 continue 和 break
  for..in 循环主要是用来遍历对象的（遍历对象的可枚举属性的） 效率最低，原因是因为不但要遍历自身的属性还要遍历原型的
  forEach 一个方法，主要是用来遍历数组的，效率最高，但是不可以使用 continue 和 break
  for..of 是 es6 里面新加的一种遍历方法，效率没有 forEach 高（比其它的要高），也可以使用 continue 和 break，for..of 只能针对可迭代对象

  遍历对象最快的方法也是使用 forEach 是把对象属性转化为数组然后进行遍历
  Object.keys(searchParams) 是把一个对象转化为数组，这个数组当中存储的是这个对象所有的属性名
  Object.keys(searchParams) 就是为了让对象可以使用 forEach 方法来高效去遍历

3. 动态确定排序项和排序方式 背景色、箭头图标、绑定点击事件、computed 简化代码

4. 分页器组件 当前页码、总条数、每页数量、连续页数、上下页、搜索条件改变重置为第一页

5. 详情页 -> 静态页面 -> 配置路由(params 参数 goodsId) -> 模块化路由 -> 配置路由滚动行为(官网找)

6. 发请求、三连环(reqDetailInfo、vuex 注册使用 detail、detailInfo、getDetailInfo)、组件引入数据 getDatailInfo(data 参数 skuId 接收 route 中的 params 参数)、通过 getters 获取数组和对象数据(categoryView,skuInfo,spuSaleAttrList)

7. 将数据展示到模板中

8. 获取 skuInfo 中的 imgList(computed)，绑定给子组件，绑定数据之前数据没回来，如果使用数组[]的方式取值会报错，所以需要在没回来之前处理，在 Zoom 中初始化 data 属性 defaultIndex: 0，然后通过它计算出图片的路径 || {}

9. - 点击切换销售属性值的选中状态
   - 点击图片列表的小图片，切换橙色的边框
   - 点击小图切换大图
   - 小图片的轮播
   - 放大镜操作
     > event.clientX 相对视口左上角
     > event.pageX - 相对页面左上角
     > event.offsetX 相对元素本身左上角
     > el.offsetWidth
     > el.offsetHeight

# 21-07-11

1. 商品数量交互操作 skuNum

   - blur 事件 失去焦点触发，但是当不会判断两次数据是不是不一样再触发
   - change 事件 内部包含焦点触发事件，当两次数据不一样触发，否则不触发

2. 添加购物车 发送请求 reqAddOrUpdateShopCart vuex 添加模块 shopcart (dispatch 发送请求 的参数只能是两个({commit}, {···})，点击分发时函数需要是 async 函数来接收 action 的函数的结果) 然后 try···catch 处理成功失败的结果，失败抛出错误，成功就跳转页面(两个参数，skuNum 可以路由传参，对象最好使用存储方案 sessionStorage.setItem) 添加成功静态页面 配置路由

   - async 函数返回值一定是 promise 对象，promise 对象的成功失败以及结果需要看 return 的结果
     > 非 promise 对象 -> 成功，结果是 return 的值
     > promise 对象 -> return 的 promise 成功，就返回成功，return 的是失败就失败，值是 return 的值
     > throw 错误 -> 返回失败，值是 throw 抛出的错误

3. 添加购物车成功页面展示 data 存储获得的数据 绑定数据到模板中 从静态数据中将字体图标的部分引入 添加 routerlink 返回详细信息页面 添加购物车静态页面组件 配置路由 调整静态页面布局 第三项删除 15 35 10 15 12.5 12.5

4. 获取购物车列表 reqShopCartInfo 三连环 然后组件 beforeMount 调用函数，method 定义存储数据到 vuex

5. 生成用户临时标识请求数据 userTempId: getUserTempId() -> 专门用来生成用户的临时标识 新建文件夹 src 下 utils(工具)下 userabout.js -> 和用户相关的工具函数 export function getUserTempId() {} -> 一般用户的临时标识都是唯一的，而且一旦生成不会轻易改变 先找 localStorage 要 USERTEMPID_KEY，获取到了直接返回，获取不到通过 uuid 创建并存到 localStorage 在请求拦截器加上请求头-临时标识 通过引入 store 获取，如果存在就加到请求头中

6. 购物车动态数据初始化展示 shopCartInfo -> cartInfo -> cartInfoList

7. 初始化中需要计算的数据 checkedNum - 统计已选的件数(reduce) allMoney - 统计总价(reduce) isCheckAll - 计算全选数据(get(every) set)

8. - 修改购物车的数量(接口就是 reqAddOrUpdateShopCart 参数是 skuId、skuNum(数量的变化值)) 绑定事件 changeCartNum(cart, disNum, flag(判断进入函数的方式 -> 点击还是输入))
   - 修改单个的购物车选中状态 定义接口函数 reqUpdateCartIscheck vuex 的 action 的 updateCartIscheck() -> 同样需要 try，成功返回'ok'，失败返回失败的 promise
   - 修改多个的购物车选中状态 -> promise.all 借助单个修改的请求 updateCartIscheckAll

# 21-07-12

1. 购物车页面的删除一个和多个功能

2. 注册和登录的静态页面 修改图片路径 登录和注册页面的互相跳转

3. 绑定注册数据 reqUserRegister (userInfo) 将 code 的 img 标签改为 button 通过发送请求获取(getCode -> reqGetCode --- code: '' -> getCode)
   > 记得添加 async 和 await
4. 登录页面 收集数据 绑定事件 login() userToken 的三连环
   > 阻止 form 元素的默认行为
   > 记得传参，不传参返回 201
5. 路由导航守卫
   > 当路由跳转的时候，守卫可以拦截，然后检测是否满足跳转页面的条件
   > 全局导航守卫 无论从哪个页面跳转哪个页面，只要是路由跳转，就会拦截检查
   > 1、前置守卫 配置的比较靠前 匹配路由前拦截 用的最多
   > 2、解析守卫 配置的位置中间 匹配路由中拦截
   > 3、后置守卫 配置的比较靠后 匹配路由完成拦截
   > 路由独享守卫 只能拦截固定的跳转某个页面的，是配置在当前路由当中，时间比较靠前
   > 1、前置守卫 配置的比较靠前 匹配路由前拦截 用的最多
   > 2、解析守卫 配置的位置中间 匹配路由中拦截
   > 3、后置守卫 配置的比较靠后 匹配路由完成拦截
   > 组件内守卫 只能拦截固定的跳转某个页面的，是配置在组件内部，也就是路由匹配已经完成了，时间比较靠后
   > 1、只有一个，解析完成，跳转组件，但是组件还未创建成功的时候拦截
6. 请求拦截器中的请求头带上 token，然后根据 token 获取用户信息 reqGetUserInfo state(userInfo)

7. 自动登录、退出登录(logout)

8. 购物车页面跳转，订单静态页面(trade、pay、paysuccess) reqUserAddress(请求获取用户的收货地址信息)、reqTradeInfo(请求获取订单交易页面信息) state(userAddressList) trade.js(tradeInfo: {})

9. 点击地址动态交互改变默认地址及最终邮寄地址的计算 isDefault changeDefault()
   > find 找到符合条件的某一项 参数是回调函数
   > findIndex 找到符合条件的某一项的下标 参数是回调函数

# 21-07-13

1. 点击提交订单 submitOrder() reqSubmitOrder(tradeNo, tradeInfo) pay orderNum payInfo reqPayInfo
   > 不使用 vuex 发送请求，在 main.js 中 `import * as API from '@/api'`，然后在组件中安装`Vue.prototype.$API = API`
2. 使用 element-ui
   > 1、安装 element-ui 2、安装 babel 相关的包 3、配置 babel 文件 4、引入组件并注册
3. pay -> 查看 element-ui 官网配置属性 `npm install --save qrcode` github 查找 node-qrcoe(用来生成二维码图片)

4. 请求获取订单支付状态 reqPayStatus (轮询) 开启定时器轮询并保存

5. center 静态组件 MyOrder GroupOrder

6. 请求获取订单列表 reqMyOrderInfo getMyOrderInfo page:1、limit:3、myOrderInfo:{} 绑定数据，合并单元格 分页器

7. 配置守卫 如果没登录，访问(交易相关、支付相关、用户中心相关)需要跳转登录页面

8. 配置路由独享守卫(组件内守卫)
   > 只有携带了 skuNum 和 sessionStorage 内部有 skuIndo 数据，才能看到添加购物车成功的界面
   > 只有从购物车界面才能跳转交易界面
   > 只有从交易页面(创建订单)才能跳转支付页面
   > 只有支付页面才能跳转支付成功页面
9. 图片懒加载 `npm install vue-lazyload -s` 在异步获取图片的位置 `<img v-lazy="···" />`
   ```js
   import VueLazyload from "vue-lazyload";
   import loading from "@/assets/images/loading.gif";
   // 在图片界面没有进入到可视范围前不加载，在没有得到图片前先显示loading的图片
   Vue.use(VueLazyload, {
     // 内部自定义了一个指令 lazy
     loading, // 指定未加载得到图片之前的loading图片
   });
   ```
10. 路由懒加载
    > import 函数可以让文件单独打包，并且动态加载，第一次访问时才会调用 import 访问对应的 js 打包文件 `const Home = () => import('@/pages/Home')`
    > import from 会打包成一个大文件，浏览器访问时效率不高
11. 表单验证 vee-validate.md

12. 打包生成 dist 文件

# 21-07-14

1. 组件通信代码准备

2. 组件间通信 props(一)
   - props 子组件声明接收属性三种写法 `['todos']` `{ todos: Array }` `{ todos: {type: Array, default: []} }`
   - 父子之间
     父可以给子传递(非函数和函数) 传非函数数据就是父给子 传函数数据 本质是父想要子的数据
   - 特殊:
     路由配置 props(三种）路由组件之间没有标签，但是可以把参数通过路由映射为属性
     1、布尔值 true 把路径 params 参数映射为要显示的组件内属性
     2、对象 {name : '赵丽颖'} 只能映射传递额外的静态的数据 一般不用
     3、函数 props: (route) => {} 自己手动映射 params 参数和 query 参数成为要显示的组件内属性
     如果不用 props，那么组件内要用数据必须要写成 this.$route.params.xxx this.$route.query.xxx
3. 组件间通信 自定义事件(二)
   - 自定义事件
     子向父传递数据
   - 原生 dom 事件
     事件类型 回调函数 谁调用 默认传递的实参是什么
     1、事件类型 固定的几个
     2、回调函数 自己去定义的
     3、触发(分发、触发事件)了谁调用 系统调用浏览器去调用
     4、event 事件对象 浏览器调用回调函数的时候传递的默认参数 box.onclick = function(event){}
   - 自定义事件
     事件类型 回调函数 谁调用 默认传递的是什么
     1、事件类型 无数个
     2、回调函数 自己去定义的
     3、谁调用 自己去调用自己使用$emit触发调用的
     4、默认传递的是什么 默认传递的是自己给的参数 (有就有，没有就没有undefined) this.$emit('haha', 10)
   - 原生 dom 事件在 html 标签和组件标签上的区别(Event1 组件测试)
     在 html 标签上添加就是原生的 dom 事件
     在组件标签上添加就是自定义事件，想成为原生的事件得添加修饰符, native,就是把原生 dom 事件添加到组件根元素上(事件委派了)
   - vue 自定义的事件在 html 标签和组件标签上的区别(Event2 组件测试)
     在 html 标签上添加自定义事件无意义，所以自定义事件是给组件标签添加的
     事件名可以任意，也可以和原生的 dom 事件名相同，但是在组件标签身上即使绑定原生 dom 事件的事件名，该事件也是自定义的
4. 全局事件总线(三)

   - 所有场合
   - 本质是一个对象
   - 全局事件总线的角色标准
     1、所有的组件对象都可以看到它
     2、可以使用 $on 和 $emit 方法
   - 怎么添加事件总线
     1、安装总线 本质就是在 Vue 的原型上挂上 vm 作为总线
     2、在接收数据的组件对象当中 获取总线给总线绑定自定义事件 this.$bus.$on
     3、在发送数据的组件对象当中 获取总线触发总线身上绑定的自定义事件 this.$bus.$emit

5. v-model 深入(四)
   element-ui 表单相关项都使用到了 v-model
   官方网站也提出了怎么去使用

   - 1、html input v- -mode |的本质
     `:value = "data"` //读取数据
     `@input = "data = $event.target.value"` //写数据
   - 2、组件标签上 v-modeI 本质
     `:value = "data"` //父组件传递属性给子组件，子组件需要接受
     `@input = "data = $event"` //父组件当中给子组件添加的自定义事件
     数据在父组件当中

     子组件当中必须这样写
     先接受 `props:['value']`

     子组件表单类元素

     > `:value = "value"` > `@input = "$emit('input', $event.target.value)"`

   - 干了两件事
     先显示数据 再绑定修改数据的事件
     只不过在 html 和组件标签上绑定的 @input 事件不同 一个是原生的一个是自定义的事件

   - 实现父子组件双向数据同步问题
   - 本质上还是自定义事件和 props 组合

6. sync 属性修饰符(五)

   - 实现父子组件双向数据同步问题 和 v-model 实现效果几乎一样
   - v-model 一般用于带表单项的组件
   - sync 属性修饰符一般用于不带表单项的组件

   - 父组件给子组件属性传递数据后面添加.sync
   - 子组件修改数据需要分发事件 `@click = "$emit('update:属性名', 要更新的数据)"`
   - 本质上还是自定义事件和 props 组合

7. `$attrs` 和 `$linsteners` (六)
   - 对一个组件进行二次封装
   - 本质就是父组件中给子组件传递的所有属性组成的对象及自定义事件方法组成的对象
   - `$attrs`如果不声明 props 那么子组件当中`$attrs` 是可以看到如果 声明了哪个属性，那么那个属性在`$attrs` 当中看不到
     它会排除 props 声明接收的属性以及 class style
   - 可以通过 v-bind 一次性把父组件传递过来的属性添加给子组件
   - 可以通过 v-on 一次性把父组件传递过来的事件监听添加给子组件
   - 对一个组件进行二次封装
8. element-ui 的 button 添加 click 事件会触发，添加 dblclick 就不会触发的问题

   element-ui 的 button 子组件内部触发了这个单击事件
   element-ui 的 button 子组件内部没有触发这个双击事件

   扩展双击点击触发 element-ui button 事件， 使用原生.native

9. `$parent` 和 `$children` 以及 `$ref` (七)

   - `$children`:所有子组件对象的数组
   - `$parent`:代表父组件对象

   - 父组件当中可以通过 `$children` 找到所有的子组件去操作子组件的数据(当然可以找孙子组件)
   - 子组件当中可以通过 `$parent` 找到父组件(当然可以继续找爷爷组件) 操作父组件的数据

10. 扩展: 多个组件有部分相同的js代码
   - html js css相同 封装组件
   - 单个组件js代码重复 封装函数
   - 不同的组件js代码重复 封装混合
   - 实现组件之间js代码的复用 利用vue的mixin技术 参考官网
   - 比如多个组件的 methods 里面很多函数都是重复的，那么我们可以定义单独的模块去把这些相同的代码定义到外部
      ```js
      export const xxxMixin = {
        methods: {
          // 重复的代码写在这
        },
      };
      ```
11. 作用域插槽(八)

- 适用: 父子之间
  数据是在父组件当中的，数据是要给子组件去展示的(vfor)
  展示的过程当中，数据的结构子组件说了不算，是由父组件决定的

- 父组件要把需要子组件展示的数据传递给子组件
  子组件在展示的过程当中，需要改变结构的数据传回给父组件
  父组件再把结果和数据一并传回给子组件

12. Vuex (九)

- 适用于所有场合 根据项目大小决定是否使用
- 5 个核心概念
  state
  mutations
  actions
  getters
  modules

13. 消息的订阅和发布 PubSubJS (十) 参考基友

- 适用于所有场合 代码类似全局事件总线
- vue 中几乎不用
- PubSubJS 要引入包来实现消息订阅和发布，会增加项目打包的体积
