$(".btnStart").on("click", start);

function start() {
    

var time = 60;
var interval = setInterval(function() {
    time--;

    if (time <= 0) {
     		clearInterval(time);
      	$('#timer').html("00:60");  
        return;
    }else{
    	$('#time').text(interval);
      console.log("Time --> " + time);
    }
}, 1000);

}