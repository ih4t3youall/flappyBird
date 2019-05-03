let pipe;
let pipe1;
let bird;

function setup(){
	//width, heigh
	this.width=800;
	this.heigh=500;
	createCanvas(this.width,this.heigh);
	bird = new Bird(this.width,this.heigh);
	pipe = new Pipe(this.width,this.heigh,bird);
	pipe1 = new Pipe(this.width-200,this.heigh-100,bird);
}

function draw(){
	background(200,89,100);
	// Draw a circle
	pipe.drawPipe();
	pipe1.drawPipe();
	bird.drawBird(pipe);
	pipe.checkColition(bird.getX(),bird.getY());
	pipe1.checkColition(bird.getX(),bird.getY());
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
