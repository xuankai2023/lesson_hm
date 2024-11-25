// function add(x,y){
    
// }

// 普通函数的区别在哪？
//构造对象的过程  构造函数 constructor
function Person(name,age){
  this.name=name;//this 指向实例
  this.age=age;
}

const wen=new Person('wen',18);
console.log(wen.age);
const chen=new Person('chen',18);
console.log(chen.name,chen.age)