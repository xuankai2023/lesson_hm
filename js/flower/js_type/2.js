let obj = {
    name:"万ql",
    job:"前端开发工程师",
    comany:"腾讯"
}
obj.hometwon="nanchang"



let a=1;
//copy
let b=a;
b=3;

//引用式赋值
let obj2 = obj;
obj2.name="xiaoql"
console.log(a,b);
console.log(obj,obj2);