class Bird{

	constructor(canvasx,canvasy,pipe){
		this.pipe = pipe;
		this.x = canvasx/2;
		this.y= canvasy/2;
		this.diameter= 20;
		this.speed =4
		this.speedy=this.speed;
		//jump stuff
		this.jumpPower=15;
		this.jumpCounter=0;
		this.jumpSpeed=-10;
		this.isJumping=false;
		this.gameOver=false;
	}
	
	getX(){
		return this.x;
	}
	getY(){
		return this.y;
	}

	drawBird(){
		ellipse(this.x,this.y,this.diameter,this.diameter);
		this.y =this.y +this.speedy;
		this.floorColition();
		this.roofColition();
		if (this.isJumping)
			this.doJump();

	}

	finishGame(){
		return this.gameOver;
	}

	killBird(){
		this.gameOver=true;
	}

	floorColition(){
		if(this.y > 500){
			this.speedy =0;
		}
	}
	roofColition(){
		if(this.y < 0){
			this.y =this.speed;
		}
	}

	jump(){
		this.isJumping =true;
		this.speedy =this.jumpSpeed;
		this.doJump();
	}


	getIsJumping(){
		return this.isJumping;
	}

	doJump(){
		if(this.isJumping){
				this.jumpCounter++; 
			if(this.jumpPower == this.jumpCounter){
				this.isJumping=false;
				this.speedy=this.speed;
				this.jumpCounter=0; 
				
			}	
		}
	}

}
