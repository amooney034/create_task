var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function gameBall() {
	ctx.beginPath();
	ctx.arc(175, 225, 10, 0, Math.PI*2);
	ctx.fillStyle = white;
	ctx.fill();
	ctx.closePath();
}
