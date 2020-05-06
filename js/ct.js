var min = 0;
var max = 255; 
var red_color = wndow.prompt("Enter the red value integer 0-255");
var blue_color = wndow.prompt("Enter the blue value  integer 0-255");
var green_color = wndow.prompt("Enter the green value integer 0-255");

if ((red_color > max) || (red_color < min) || (!Number.isInteger(red_color)) || (Number.isNaN (red_color))) {
  window.alert("Something is off with your red value.");
}

if ((blue_color > max) || (blue_color < min) || (!Number.isInteger(blue_color)) || (Number.isNaN (blue_color))) {
  window.alert("Something is off with your blue value.");
}

if ((green_color > max) || (green_color < min) || (!Number.isInteger(green_color)) || (Number.isNaN (green_color))) {
  window.alert("Something is off with your green value.");
}
