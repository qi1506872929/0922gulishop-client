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
