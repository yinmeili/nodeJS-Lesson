var obj={};
//信息存入obj
var message=["Name","Email","QQ","Mobile"];
var i=1;
//当输入数据的时候操作执行
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        //进程退出，即当前应用程序退出
        process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
})