let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(400, 200);
ctx.stroke();

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let color = false;

function keyDownHandler(event){
	color = true;
	console.log('key ' + event.keyCode + ' down');
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,400,200);
}

function keyUpHandler(event){
	color = false;
	console.log('key ' + event.keyCode + ' up');
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(0,0,400,200);
}
