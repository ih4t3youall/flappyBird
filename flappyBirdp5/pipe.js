class Pipe{

	constructor(canvasx,canvasy){
		this.x = canvasx;
		this.y = canvasy;
		this.colA = canvasx;
		this.colB = canvasx-100;
		this.heigh = 300;

	}

	drawPipe(){
		line(this.colA,500,this.colA,this.heigh);
	}



}
