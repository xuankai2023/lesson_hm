let objWithStringValue = {
    toString: function(){
        return "hello"
    }
}

console.log(String(objWithStringValue))

let objWithValueOf = {
    toString: function(){
        return this
    },
    valueOf: function(){
       return 2
    }
}

console.log(String(objWithStringValue))


let objWithoutValueOf = {
    toString: function(){
        return this
    },
    valueOf: function(){
       return this
    }

}

try{
    console.log(String(ObjectWithoutPrimitive))
  }catch(e){
    console.log(e)
  }
