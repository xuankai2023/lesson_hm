# 爬楼梯、

- 递归
  -顶端思维 自顶向下 n阶 有几种走法
  递归公式
  f(n)=f(n-1)+f(n-2)
  退出条件
  f(1)=1
  f(2)=2


- 什么样的题目让我们想到用递归？
  自顶向下，画图的时候，是树状结构，就可以想到用递归。
  - 先把问题定位到终点
  - 站在终点，思考后退的各种可能性

                f(n)
               /    \
           f(n-1)   f(n-2)
- 爬楼梯递归
  - 爆栈
  - 重复计算 用空间换时间 
  - 记忆搜索



- 拿到算法题，先拿常用的算法套一下（递归、分治、回溯、贪心、动态规划...）
- 