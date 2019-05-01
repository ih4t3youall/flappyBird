var columnA =600; //las lineas laterales del rectangulo
var columnB =700;
var speed =1;
var heigh=canvasY-200;
function drawRectangle(){

	columnA =columnA-speed;
	columnB =columnB-speed;

	//linea vertical 1
	rectangle.moveTo(columnA ,canvasY);
	rectangle.lineTo(columnA ,heigh);
	rectangle.stroke();

	//linea vertical 2
	rectangle.moveTo(columnB ,canvasY);
	rectangle.lineTo(columnB ,heigh);
	rectangle.stroke();

	//tapa
	rectangle.moveTo(columnB ,heigh);
	rectangle.lineTo(columnA,heigh);
	rectangle.stroke();

	checkColition();

}

function clearCanvas(){
rectangle.clearRect(0, 0, canvas.width, canvas.height);

}

function checkColition(){
	if( x > columnA){
		if(x < columnB){
			if (y>heigh ){
				speed=0;
				game = false;
				gameOver();
			}
		}
	}
}
