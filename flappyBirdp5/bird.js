class Bird{

	constructor(canvasx,canvasy){
		this.x = canvasx/2;
		this.y= canvasy/2;
		this.diameter= 20;
		this.speed =4
		this.speedy=this.speed;
		//jump stuff
		this.jumpPower=40;
		this.jumpCounter=0;
		this.jumpSpeed=7;
		this.isJumping=false;
	}

	drawBird(){
		ellipse(this.x,this.y,this.diameter,this.diameter);
		this.y =this.y +this.speedy;
		this.floorColition();
	if (this.isJumping)
		this.doJump();
	}

	floorColition(){
		if(this.y > 500){
			this.speedy =0;
		}
	}

	jump(){
		this.isJumping =true;
	}
	doJump(){
		if(this.jumpPower == this.jumpCounter){

		}	

	
	
	}

}
