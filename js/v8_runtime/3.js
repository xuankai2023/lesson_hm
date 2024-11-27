function bar(){
    console.log(myname);
}

function foo(){
    var myname = "xxx"
    bar()
    console.log(myname);
}
var myname = 'list'
foo();