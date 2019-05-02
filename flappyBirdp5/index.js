let pipe;
let bird;

function setup(){
	createCanvas(500,500);
	pipe = new Pipe(500,500);
	bird = new Bird(500,500);
}

function draw(){
	background(200,89,100);
	// Draw a circle
	pipe.drawPipe();
	bird.drawBird();
}
