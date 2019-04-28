var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
	    ctx.beginPath();
	    ctx.arc(x, y, 10, 0, Math.PI*2);
	    ctx.fillStyle = "#0095DD";
	    ctx.fill();
	    ctx.closePath();
}

function draw() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    drawBall();
checkCollitionX();
checkCollitionY();
	    x += dx;
	    y += dy;
	
}

function checkCollitionX(){
	if(x == 4){
		dx = 2;
	}
	if( x == 474){
		dx = -2;
	}
}
function checkCollitionY(){
	    if (y == 314){
	    dy = -2;
	    }
	    if (y == 4){
	    dy = 2;
	    }
}

setInterval(draw, 10);
