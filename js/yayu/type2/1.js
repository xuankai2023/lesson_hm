var a = 1.23;
console.log(typeof a); //Number
var b = new Number(a); //Number 对象
console.log(typeof b)// Object
console.log(b.toFixed(1) ) //"1.2"
// 面向对象极致风格 toFixed(a) 函数式的
console.log(a.toFixed(1));//"1.2"  包装类
(new Number(a)).toFixed()//将a 包装成对象 但是Number 还是简单数据类型
