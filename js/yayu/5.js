function Person(name,age){
    console.log(this);
    this.name=name;//this 指向实例
    this.age=age;
  }
  const cy={
    name:"陈宇",
    playBasketball:function(){
        console.log('斗罗科比');
    }
  }
  Person.prototype=cy;
  //原型？ cy
  
 const wu =new Person('wu',19);
 wu.playBacketball();
 console.log(wu.__proto__===cy)

