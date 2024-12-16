# js类型转换

 - es6 之前，js有多少种类型？ 6种，
   -简单数据类型，primitive types ，拷贝式赋值
   - String 
   - Number
   - Boolean
   - Null
   - Undefined
   - 复杂类型，引用式赋值
   - Object

- 为何js的类型会改变？

- js 是弱类型语言
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型 ， 大圣来了
  - primitive 类型-> 其他类型的转换
     - Boolean
  - Object类型 -> 其他类型的转换


- Boolean（构造函数） 显示类型转换规则
  - false 的情况
  - 为空 false
  - +0 
  - -0
  - undefind
  - NAN
  - null
  - ture 的情况

- +0 -0
Object.is()
1/+0, 1/-0 INfinity -Infinity
- NaN
 类型仍然是，表示一个特殊的数字 Not a Number

- Number()
0 1 NaN


- String