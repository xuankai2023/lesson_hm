
// constructor
function Person(name,age){
    console.log(this);
    this.name=name;//this 指向实例
    this.age=age;
  }
// 每个函数都有一个原型对象
  Person.prototype={
    eat:function(){
        console.log(`${this.name}爱吃饭`)
    }
  }
  const xck=new Person('xaio',18)
  xck.eat(); 
  const xqk=new Person('xaio',18)
  xqk.eat();