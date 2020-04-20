var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function gameBall() {
	ctx.beginPath();
	ctx.arc(175, 225, 10, 0, Math.PI*2);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}

function paddleOne() {
	ctx.beginPath();
	ctx.rect(10, 175, 5, 50);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}

function paddleTwo() {
	ctx.beginPath();
	ctx.rect(440, 175, 5, 50);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}
