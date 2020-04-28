function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function rgbtohex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};
function generateRandomColor() {
  var rr = getRandomInt(0, 255), gg = getRandomInt(0, 255), bb = getRandomInt(0, 255)
  var randomcolor = [rr, gg, bb]
  return randomcolor
}
var randomcolor = generateRandomColor()
function fullColorHex() {
  var red = rgbtohex(randomcolor[0]);
  var green = rgbtohex(randomcolor[1]);
  var blue = rgbtohex(randomcolor[2]);
  return red + green + blue;
};
document.getElementById("color").innerHTML = '#' + fullColorHex().toUpperCase()
document.body.style.backgroundColor = 'rgb(' + randomcolor[0] + ',' + randomcolor[1] + ',' + randomcolor[2] + ')'
function invertColor() {
  var r = parseInt(randomcolor[0], 16),
    g = parseInt(randomcolor[1], 16),
    b = parseInt(randomcolor[2], 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186
    ? '#000000'
    : '#FFFFFF';
}
document.getElementById("color").style.color = invertColor()