class Pipe{

	constructor(canvasx,canvasy){
		this.x = canvasx;
		this.y = canvasy;
		this.colA = 300;
		this.colB = this.colA-100;
		this.heigh = 300;

	}

	drawPipe(){
		line(this.colA,500,this.colA,this.heigh);
		line(this.colB,500,this.colB,this.heigh);
		line(this.colA,this.heigh,this.colB,this.heigh);
	}



}
