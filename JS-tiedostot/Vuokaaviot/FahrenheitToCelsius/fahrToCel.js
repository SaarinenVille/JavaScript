function fahrToCel() {
  var fahrenheit = document.getElementById('userInput').value;
  var subtract = fahrenheit - 32;
  var celsius = subtract * 0.5556;
  document.write(Math.floor(celsius));
}
