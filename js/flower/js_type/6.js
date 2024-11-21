function greet(name){
    return `Hello,${name}`;
}
greet('weiwu')
greet.language= "english"
greet.greetInSpanish=function(name){
    return`hola,${name}!`
}

function invokeGreeting(greetingFunction,name){
    return greetingFuncyion(name)
}
console.log(invokeGreeting(greet,'weiwu'))