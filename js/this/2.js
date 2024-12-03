var name = "dl"
var a= {
    name: "xzq",
    func1: function() {
        console.log(this.name);
    },
     func2: function() {
        setTimeout(function(){//普通函数
            //this 被指定了
        this.func1()
        }.call(a),1000)
    }
 }
 a.func2();