//js 造人
//对象字面量
let 超={
    name:'小超'
}
let fan={
    name:'小fan',
    age:17,
}
// class es6 
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        console.log('吃饭');
    }
    
}

let wei=new Person('啊喂',18)
let guo=new Person('guo',18)