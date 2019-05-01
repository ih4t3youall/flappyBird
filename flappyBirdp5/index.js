let colA=500;
let colB=400;
let heigh=300;
let quin=500;
let frame=1;
let pipe;

function setup(){
	createCanvas(500,500);
	pipe = new Pipe(500,500);
}

function draw(){

	if(mouseIsPressed){
		fill(0);
	}else{
		fill(255);
	}
	background(200);
	// Draw a circle
	stroke(50);
	fill(100);
	pipe.drawPipe();

//	colA = colA-frame;
//	colB = colB-frame;


//	line(colA,quin,colA,heigh);
//	line(colB,quin,colB,heigh);
//	line(colA,heigh,colB,heigh);

	

}
