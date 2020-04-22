var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

	function drawBall() {
		ctx.beginPath();
		ctx.arc(303, 200, 8, 0, Math.PI*2);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
	}


	function drawPone() {
		ctx.beginPath();
		ctx.rect(30, 175, 5, 50);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
	}
	

	function drawPtwo() {
		ctx.beginPath();
		ctx.rect(570, 175, 5, 50);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
	}


	function drawNet() {
		ctx.beginPath();
		ctx.rect(300, 220, 5, 10);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
}

drawBall();
drawPone();
drawPtwo();
drawNet();
