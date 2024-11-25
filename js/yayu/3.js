function Person(name,age){
    console.log(this);
    this.name=name;//this 指向实例
    this.age=age;
  }

  person('昌',19) //扑通方式运行
 const dys=new person('昌',19)//构造函数运行
 const dyf=new person('wei',20)//构造函数运行
