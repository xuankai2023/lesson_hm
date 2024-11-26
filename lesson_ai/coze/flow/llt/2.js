//代码可读性
function generateRandomGernder(){
   // return Math.random() > 0.5? 'male' : 'female';//三元运算符
    const genders=['male','female'];
    return genders[Math.floor(Math.random()*genders.length)]//Math.floor向下取整
}