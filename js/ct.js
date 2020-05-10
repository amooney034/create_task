//Variables by Aidan and Afonso
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var min = 0;
var max = 255; 
var red_binary;
var green_binary;
var blue_binary;
var last_color;
var red_color = window.prompt("Enter the red value integer 0-255");
var green_color = window.prompt("Enter the green value integer 0-255");
var blue_color = window.prompt("Enter the blue value integer 0-255");


function checker() { //Afonso and O
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



function binary_converter() { //Afonso and O
red_color = Number(red_color); //Afonso and ☐
red_binary = red_color.toString(2);

green_color = Number(green_color); //Afonso and ☐
green_binary = green_color.toString(2);

blue_color = Number(blue_color); //Afonso and ☐
blue_binary = blue_color.toString(2);
}
binary_converter();

function getColor() { //Aidan and O
var hex = parseInt(red_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
var hexa = parseInt(green_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
var hexad = parseInt(blue_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
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
  window.alert("#" + final_color + " COPY THE HEXADECIMAL FOR THE CANVAS!" );
}
if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color)) || (green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN (green_color)) || (blue_color > max) || (blue_color < min) || (blue_color % 1 !==0) || (Number.isNaN (blue_color))) {
	window.alert("You MUST enter an integer between 0-255");
}
else {
var last_color = window.prompt("Paste the color code");
ctx.fillStyle = last_color;
ctx.fillRect(0, 0, canvas.width, canvas.height);
}
}
getColor();


function changeBackground() { //Aidan and O
var first = parseInt(red_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
var second = parseInt(green_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
var third = parseInt(blue_binary, 2).toString(16).toUpperCase(); //Aidan and ☐
if (red_color < 16) {
  var first = 0+first;
}
if (green_color < 16) {
  var second = 0+second;
}
if (blue_color < 16) {
  var third = 0+third;
}
else {
  first = first;
  second = second;
  third = third;
}
var switch_color = third + second + first;
if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color)) || (green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN (green_color)) || (blue_color > max) || (blue_color < min) || (blue_color % 1 !==0) || (Number.isNaN (blue_color))) {
}
else {
var switchy = window.alert("#" + switch_color + " COPY THE SWITCHED HEXADECIMAL FOR THE BACKGROUND");
var inverse_color = window.prompt("Paste the NEW color code");
document.body.style.background = inverse_color;
}
}
changeBackground();
