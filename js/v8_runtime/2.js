function foo(){
    var a = 1;
    let b = 2;
    {
        let b = 3;
        var c = 4;
        let d = 5;
        console.log(a);
        console.log(b)

    }//代码运行完会被销毁
    {
        
    }
    console.log(b)
    console.log(c)
    console.log(d)//没有被定义
}
foo()