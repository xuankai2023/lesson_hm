- 认识几个url
url的设计模式 restful api 
网站是用来暴露资源的 如何将资源暴露出去
  - http://localhost:3001/posts/  列表页链接
  - http://localhost:3001/posts/：id （id叫查询参数）  详情页的链接
  - http://localhost:3001/posts/：id  用户主页链接

- 数据的查询  Read
- 访问资源的方式
  - apiFox 是啥？  web 请求代理
  Get http://localhost:3001/posts/1
  Post http://localhost:3001/posts/1
  Patch http://localhost:3001/posts/1
  - 资源 db.json users posts
  - HTTP 协议
   - Method（动作 GET |PATCH |POST 新增| ） + url（资源） 请求行  
   - 请求头 Cookie Content-Type:text/json...
   - 请求体 
    - json-server 
      - 提供 http 服务
      - db.json 数据资源向外提供访问 CRUD


- 会设计 restful api 接口 
  - 需求
   - 新增一篇文章
  http ://localhost:3000/posts POST 
   <!-- 下面是请求体 -->
   {
    ....
   }
   - 删除 文章二
   http ://localhost:3000/posts/2  DELETE 



- json-server 是一个支持restfor api 设计的数据服务器

- 全栈防抖
 - 前后端分离  解耦  
  - 前端 live-server 5500
  fetch 通过url发送请求
  - 后端 json-server 3001
   通过url 提供服务 restful
  - 通过api 接口 连接前后端

- filter、map
   - 都是Array.prototype 上的方法，所有数组都有
   - filter 对数组进行过滤，回调函数的返回值是否为true,
   - map 对数组进行映射，回调函数的返回值，会组成一个新的数组 原有数组不能满足需求
   - forEach d迭代每一项 不需要返回


- 防抖
  - 将要执行的函数 交给一个debounce()高阶函数去优化
  - 减少执行次数 只执行最后一次
  - 定时器 本次关闭上一次的定时器

