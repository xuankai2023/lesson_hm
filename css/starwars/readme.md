# 星球大战
- <!DOCTYPE html>
 html5 版本声明头
 <html lang="en">
 文件标签属性为英文
 <meta charset="UTF-8">

 <meta name="viewport" content="width=device-width, initial-scale=1.0">


 - *
    css通配符，所有元素
    margin 0 padding 0 所有元素初始化一致
    由于有不同浏览器厂商，默认值不一样
    需要在页面样式开始之前，做一个样式reset 让任何浏览器访问，我们的页面都是一张白纸
    * 性能不太好，所以我们宁愿列出所有的标签
- 居中
  - 定位 positon: absoulte 
    - 百分比相对于父元素
  - transform 变基属性
    - translate 移动
        x 左移 负 右移 正
        y 上移 负 下移 正
    - 背景大法
        盒子在页面的占位会出来
    - css 动画
        - animation
        - keyframes
        - transform scale translateY
        - 飞船模拟动画，逼真
        - 1% 时间差，画龙点睛
        - transform-style:perspective-3d  开启3d
            perspective:800px;视点，眼睛离屏幕的距离
 