class Pipe {

	constructor(colA,colB){

		this.canvasYP=500;
		this.canvasXP=900;
		this.rectangle = canvas.getContext("2d");
		this.columnA =colA; 
		this.columnB =colB;
		this.speed =1;
		this.heigh=this.canvasYP-200;
	}

	drawPipe(){

		this.columnA =this.columnA-this.speed;
		this.columnB =this.columnB-this.speed;

		//linea vertical 1
		this.rectangle.moveTo(this.columnA ,this.canvasYP);
		this.rectangle.lineTo(this.columnA ,this.heigh);
		this.rectangle.stroke();

		//linea vertical 2
		this.rectangle.moveTo(this.columnB ,this.canvasYP);
		this.rectangle.lineTo(this.columnB ,this.heigh);
		this.rectangle.stroke();

		//tapa
		this.rectangle.moveTo(this.columnB,this.heigh);
		this.rectangle.lineTo(this.columnA,this.heigh);
		this.rectangle.stroke();

		this.checkColition();

	}


	checkColition(){
		if( x > this.columnA){
			if(x < this.columnB){
				if (y>this.heigh ){
					this.speed=0;
					console.log("game end");
				}
			}
		}
	}
}
