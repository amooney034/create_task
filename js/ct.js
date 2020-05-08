var min = 0;
var max = 255; 
var red_color = window.prompt("Enter the red value integer 0-255");
var blue_color = window.prompt("Enter the blue value  integer 0-255");
var green_color = window.prompt("Enter the green value integer 0-255");

if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color))) {
  window.alert("Something is off with your red value.");
}

if ((blue_color > max) || (blue_color < min) || (blue_color % 1 !==0) || (Number.isNaN (blue_color))) {
  window.alert("Something is off with your blue value.");
}

if ((green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN (green_color))) {
  window.alert("Something is off with your green value.");
}

var min = 0;
var max = 255; 
var red_color = window.prompt("Enter the red value integer 0-255");
var blue_color = window.prompt("Enter the blue value  integer 0-255");
var green_color = window.prompt("Enter the green value integer 0-255");

if ((red_color > max) || (red_color < min) || (red_color % 1 !==0) || (Number.isNaN (red_color))) {
  window.alert("Something is off with your red value.");
}

if ((blue_color > max) || (blue_color < min) || (blue_color % 1 !==0) || (Number.isNaN (blue_color))) {
  window.alert("Something is off with your blue value.");
}

if ((green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN (green_color))) {
  window.alert("Something is off with your green value.");
}

if (Number.isNaN (red_color) || Number.isNaN (blue_color) || Number.isNaN (green_color)) {
  red_color === 0;
  blue_color === 0;
  green_color === 0;
}

var red_binary;
var blue_binary;
var green_binary;

function binary_converter() {
red_color = Number(red_color);
red_binary = red_color.toString(2);

blue_color = Number(blue_color);
blue_binary = blue_color.toString(2);

green_color = Number(green_color);
green_binary = green_color.toString(2);
}
binary_converter();

function finale() {
var hex = parseInt(red_binary, 2).toString(16).toUpperCase();
var hexa = parseInt(blue_binary, 2).toString(16).toUpperCase();
var hexad = parseInt(green_binary, 2).toString(16).toUpperCase();

if (hex < 10 || hexa < 10 || hexad) {
  var last_red = 0+hex;
  var last_blue = 0+hexa;
  var last_green = 0+hexad;
}

var final_color = last_red + last_blue + last_green;
window.alert(final_color);
}
finale();
