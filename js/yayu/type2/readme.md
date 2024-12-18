# 显示类型转换和隐式转换
String Number Boolean 以函数运行 强制类型转换
- 构造函数 new 
- Primitive 怎么转对象

- 对象转primative

- 包装类
 "abc".length 
 "1.23".toFixed(1)
  new String("abc") new Number(1.23)
  JS 一切面向对象  自动帮我们包装一下简单数据类型
  叫做包装类

  - 对象转Primitive   Object => Primitive
  - Boolean
  - String
  toString()
  - Object.prototype.toString.call({a:1})  "[object Object]"
  确切类型
  - 数组，调用原型链上的tiString方法
  - 函数 返回源代码
  - 日期对象
  - Number
    

- Object => Primitive  情理之中

   - String
     - 先去调用 valueOf ，如果是原始值，返回。 
     - 否则，调用toString 返回一个原始值，返回
     - 否则 ，报错

- Object => String|Number
   - toPrimitve 是使命
   - toString 
   - valueOf
   - Number 先valueOf 再toString
   String 先toString 再valueOf
   也在情理之中
   - 报错 cannot convert object to primitive value TypeError:
