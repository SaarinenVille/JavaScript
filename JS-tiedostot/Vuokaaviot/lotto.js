function lotto() {
  var numerot = [];

  while (numerot.length < 7) {
  var uusinumero = randomInt(39);
  if (numerot.indexOf(uusinumero) == -1) {
      numerot.push(uusinumero);
  }
}
document.getElementById('numerot').innerHTML = numerot.toString();
}

function randomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}



























/*

function secondsOnly() {

var hours = document.getElementById('tunnit').value;
var minutes = document.getElementById('tunnit').value;
var seconds = document.getElementById('tunnit').value;

var onlySeconds = hours*3600 + minutes*60 + seconds;

document.write(onlySeconds + " sekuntia");




}

*/
