var min = 0;
var max = 255; 
var red_color = window.prompt("Enter the red value integer 0-255");
var blue_color = window.prompt("Enter the blue value  integer 0-255");
var green_color = window.prompt("Enter the green value integer 0-255");

if ((red_color > max) || (red_color < min) || (red_color % 1 !=0) || (Number.isNaN (red_color))) {
  window.alert("Something is off with your red value.");
}

else if ((blue_color > max) || (blue_color < min) || (blue_color % 1 !=0) || (Number.isNaN (blue_color))) {
  window.alert("Something is off with your blue value.");
}

else if ((green_color > max) || (green_color < min) || (green_color % 1 !=0) || (Number.isNaN(green_color))) {
  window.alert("Something is off with your green value.");
}
