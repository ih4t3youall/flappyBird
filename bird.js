var dx = 2;
var dy = 2;
var jump = false;
var times = 0;
var jumpHeight = 20;
var game = true;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function doJump(){

	times++;
	if (times < jumpHeight){
		dy =-6;
	}
	if(times > jumpHeight ){
		dy =2;
		jump = false;
		times = 0;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (game)
		drawBall();
}

function draw() {
	console.log("jump: "+jump);
	if(jump){
		if(game)
			doJump();
	}else{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	console.log("y: "+y);
	if(game)
		drawBall();
	marginCollition();
//	x += dx;
	y += dy;
	drawRectangle();
	
}

function marginCollition(){
	checkCollitionX();
	checkCollitionY();
}

function checkCollitionX(){
	if(x < 4){
		dx = 2;
	}
	if( x > 500){
		dx = -2;
	}
}

function checkCollitionY(){
	if (y > 500){
		dy = 0;
	}
	if (y < 4){
		dy = 2;
	}
}

setInterval(draw, 10);
canvas.addEventListener('click',()=>{
	jump = true;
	y=y-2;
});
