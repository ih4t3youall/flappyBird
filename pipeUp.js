class PipeUp{

	constructor(canvasx,canvasy,bird){
		this.x = canvasx;
		this.y = canvasy;
		this.colA = canvasx-100;
		this.colB = canvasx;
		this.heigh = 200;
		this.speedx=4;
		this.bird = bird;

	}

	checkColition(x,y){
		if (y < this.heigh){
			if (x > this.colA){
				if (x < this.colB){
					this.speedx=0;	
					this.bird.killBird();
				}
			}
		}
	}

	drawPipe(){
		line(this.colA,0,this.colA,this.heigh);
		line(this.colB,0,this.colB,this.heigh);
		line(this.colA,this.heigh,this.colB,this.heigh);
		this.colA=this.colA-this.speedx;
		this.colB=this.colB-this.speedx;
	}



}
