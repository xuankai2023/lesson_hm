//hoisting 
console.log(b);//词法环境中的变量/常量，在申明之前不可访问
//暂时性死区 TDZ
console.log(a,func);
var a = 1;
function func(){

}
let b=2;
b++;//词法环境里查找b