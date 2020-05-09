var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var min = 0;
var max = 255; 
var red_binary;
var green_binary;
var blue_binary;
var red_color = window.prompt("Enter the red value integer 0-255");
var green_color = window.prompt("Enter the green value integer 0-255");
var blue_color = window.prompt("Enter the blue value  integer 0-255");



function checker() {
if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color))) {
  window.alert("Something is off with your red value.");
}

if ((green_color > max) || (green_color < min) || (green_color % 1 !==0) || (Number.isNaN (green_color))) {
  window.alert("Something is off with your green value.");
}

if ((blue_color > max) || (blue_color < min) || (blue_color % 1 !=0) || (Number.isNaN (blue_color))) {
  window.alert("Something is off with your blue value.");
}
}
checker();



function binary_converter() {
red_color = Number(red_color);
red_binary = red_color.toString(2);

green_color = Number(green_color);
green_binary = green_color.toString(2);

blue_color = Number(blue_color);
blue_binary = blue_color.toString(2);
}
binary_converter();


function finale() {
var hex = parseInt(red_binary, 2).toString(16).toUpperCase();
var hexa = parseInt(green_binary, 2).toString(16).toUpperCase();
var hexad = parseInt(blue_binary, 2).toString(16).toUpperCase();

if (red_color < 16) {
  var hex = 0+hex;
}
if (green_color < 16) {
  var hexa = 0+hexa;
}
if (blue_color < 16) {
  var hexad = 0+hexad;
}
else {
  hex = hex;
  hexa = hexa;
  hexad = hexad;
}
var final_color = hex + hexa + hexad;
if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color)) || (green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN (green_color)) || (blue_color > max) || (blue_color < min) || (blue_color % 1 !==0) || (Number.isNaN (blue_color))) {
  window.alert("Invalid input(s).");
  }
else {
  window.alert(final_color);
}
}
finale();

ctx.fillStyle = "white"; //filler color
ctx.fillRect(0, 0, canvas.width, canvas.height);
