var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

const startButton = function() {
  if (startButton.onclick) {
ctx.beginPath();
ctx.arc(300, 200, 8, 0, Math.PI*2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
 }
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
ctx.lineWidth = 5;
ctx.strokeStyle = "#FFFFFF";
ctx.beginPath();
ctx.setLineDash([20, 25]);
ctx.moveTo(300, 10);
ctx.lineTo(300, 590);
ctx.stroke();
}

drawPone();
drawPtwo();
drawNet();
startButton();
