let pipe;
let pipe1;
let pipeUp;
let bird;
let font;
let gameOver

function preload(){
	font = loadFont('assets/GreatVibes-Regular.otf');
}
function setup(){
	//width, heigh
	this.width=800;
	this.heigh=500;
	createCanvas(this.width,this.heigh);
	bird = new Bird(this.width,this.heigh);
	pipe = new PipeDown(this.width,this.heigh,this.bird);
	pipe1 = new PipeUp(this.width,this.heigh,this.bird);
//	gameOver= new GameOver(this.width,this.heigh);
//	pipe = new Pipe(this.width,this.heigh,bird);
//	pipe1 = new Pipe(this.width-200,this.heigh-100,bird);
}

function draw(){
	background(200,89,100);
	// Draw a circle
	pipe.drawPipe();
	pipe1.drawPipe();
	bird.drawBird(pipe);
	pipe.checkColition(bird.getX(),bird.getY());
	pipe1.checkColition(bird.getX(),bird.getY());
	//gameOver.drawGameOver();
}

function mouseClicked(){
	if(!bird.gameOver()){
		if(!bird.getIsJumping()){
			bird.jump();
		}
	}
}

function keyPressed(){
	if(!bird.finishGame())
		if(!bird.getIsJumping())
			bird.jump();
}
