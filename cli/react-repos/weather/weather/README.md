# 开发weather

- 组件思维
- 切页面
  - 先写template{{占位数据}}
  - html5 语义化
  - BEM 命名规范
- BFC 基本概念
  Block Formatting Context 块级格式化上下文
  - 浮动 float 用来实现两（多）列式布局的方案
   float :left; float:right;左右
- 产生问题
   - 子元素离开了文档流，父元素高度塌陷
   - 后面的元素会挤占nav的空间

  - flaot 和position 有区别的，
  positon 四个方向上的定位 完全离开文档流
  float 左右 没有完全离开文档流影响周边的文字，形成环绕效果

  - overflow: auto等 display:flex 给nav元素开启了一个BFC
     - 规则，BFC 元素可以得到内部浮动元素的高度
     - 块级元素不等于BFC