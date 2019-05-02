class Bird{

constructor(canvasx,canvasy){
	this.x = canvasx/2;
	this.y= canvasy/2;
	this.diameter= 20;
	this.speedy=0;
}

drawBird(){
	ellipse(this.x,this.y,this.diameter,this.diameter);
}
floorColition(){

if(this.y < 0){
this.speedy =0;
}


}

}
