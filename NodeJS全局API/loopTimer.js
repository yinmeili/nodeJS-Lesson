var timeId = setInterval(function loop(){
    console.log("l will loop forever!");
},500);
setTimeout(function(){
    clearInterval(timeId);
    console.log("Game over")
    process.exit();
},5000);