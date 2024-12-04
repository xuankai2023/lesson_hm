# 浏览器底层原理

- 云操作系统
 - web 程序？
   chrome 如果足够强的话，可以根据云服务 
 - 阿里云 IP 服务
   一台服务器，虚拟化、容器化（docker）
 - LLM时代，云 计算资源 共享

- 为什么是Chrome？
   - 主流 
      - chrome 超越IE 浏览器(Edge) 成为NO.1
      - 国内的浏览器 其实就是chrome 套了个壳子
   - 内核
     - IE 和非IE box-sizing 不一样 代码的兼容性？    最痛苦的是前端 PC时代
     - 移动时代？ 没IE 什么事情 前端就幸福了
     苹果 webkit 内核
     Google 基于webkit ，开源了一个 chormium 的浏览器项目（360 浏览器基于它）
     chorme是chromium的商业版
     - v8 引擎+渲染引擎
     - webkit 分了叉 升级为blink 内核

   - 架构
- 要那么多的进程干什么？
   - 进程 是操作系统分配资源的最小单位
   - 线程 是CPU调度的最小单位（线程属于进程）
  
  
   - JS 是单线程的 简单可靠
   - 多线程更快 


- 并行操作 执行更块
  - 进程可以启动多个线程，
  - 线程可以共享进程中的数据
  - 进程关闭，回收内存
  - 进程之间相互隔离

- 进程间可以通信吗？
  -多项 相对比较独立的任务
  下载任务
  - 进程间的通信 IPC （Inter-Process Communication）


- chrome 多进程有哪些？
  - 浏览器主进程
   负责界面显示、用户交互（事件冒泡、捕获机制）、子进程的管理（IPC）、
   存储功能（cookie、localStorage、indexDB）因为要注意安全问题
- 渲染进程
  排版的WEbkit/Blink +v8 引擎（JS的单线程，异步） 在这个进程中
  A 页面打开的情况下 B页面也可以打开 A/B崩溃
  每个tab都是一个渲染进程，运行在沙箱之中，无法访问操作系统等的资源
  比如 GPS功能、摄像头 等 除非提醒授权
- 插件进程
flash，chorme extension 安全
- GPU进程
 3D 绘制 transform： translate3D(50%,50%,50%)
 显卡 显存 都已经习惯用GPU来加速

 - 从输入URL到页面显示？
  - 浏览器打开启动了4个进程 （多进程架构）


 