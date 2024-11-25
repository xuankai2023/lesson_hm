function Person(name,age){
    this.name=name;
    this.age=age;
    
}
Person.prototype.name='kongzi'
Person.prototype.name.hometown='ki'
let person1=new person('张',18);
let person2=new person('郭',18);
console.log(person1===person2)
console.log(peron1.name,peron1.hometown,person2.name)