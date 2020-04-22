var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

	function gameball() {
		ctx.beginPath();
		ctx.arc(302, 200, 8, 0, Math.PI*2);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
}


	function paddleOne() {
		ctx.beginPath();
		ctx.rect(30, 175, 5, 50);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
}
	

	function paddleTwo() {
		ctx.beginPath();
		ctx.rect(570, 175, 5, 50);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
}

	function net() {
		ctx.beginPath();
		ctx.rect(300, 200, 5, 10);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.closePath();
}
