const http=require("http");
const path=require("path");
const url=require("url");
const fs=require("fs");
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var urlPathName=urlObj.pathname;
    // if(urlPathName=="/favicon.ico"){
    //     res.end();
    // }
    // else if(urlPathName=="/"){
    //     var htmlPath=path.join(__dirname,"/view/view.html");
    //     var htmlContent=fs.readFileSync("htmlPath");
    //     htmlContent=htmlContent.toString("UTF8");
    //     res.writeHead(200,{"Content-Type":"text/html"});
    //     res.write(htmlContent);
    //     res.end();
    // }
    // else if(urlPathName=="/js/index.js"){
    //     var jsPath=path.join(__dirname,"/js/index.js");
    //     var jsContent=fs.readFileSync(jsPath);
    //     res.writeHead(200,{"Content-Type":"text/javascript"});
    //     res.write(jsContent);
    //     res.end();
    // }
    // console.log(urlPathName);
    // console.log(urlObj);
    // console.log(req.url);
    // var htmlPath=__dirname+"\\view\\view.html";
    // console.log(htmlPath);
    var htmlPath=__dirname+"\\view\\view.html";
    console.log(htmlPath);
    var htmlContent=fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("UTF8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
})
server.listen(8080);
console.log("server is listening 8080");