function scrabble() {

  var sana = document.getElementById('input').value;
  var pisteet = 0;

  for(var i = 0; i < sana.length; i++) {
    switch (sana[i]) {
      case "a":
      case "e":
      case "i":
      case "n":
      case "s":
      case "t":
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
        pisteet++;
        break;
      case "o":
      case "ä":
      case "k":
      case "l":
      case "O":
      case "Ä":
      case "K":
      case "L":
        pisteet += 2;
        break;
      case "u":
      case "m":
      case "U":
      case "M":
        pisteet += 3;
        break;
      case "y":
      case "h":
      case "j":
      case "p":
      case "r":
      case "v":
      case "Y":
      case "H":
      case "J":
      case "P":
      case "R":
      case "V":
        pisteet += 4
        break;
      case "ö":
      case "d":
      case "Ö":
      case "D":
        pisteet += 7;
        break;
      case "b":
      case "f":
      case "g":
      case "B":
      case "F":
      case "G":
        pisteet += 8;
        break;
      case "c":
      case "C":
        pisteet += 10;
        break;
      default:
        pisteet += 12;
        break;

    }
  document.getElementById('t1_vastaus').innerHTML = "Sanan " + sana + " pisteet ovat " + pisteet;
  }
}

function lotto() {
  var numerot = [];

  while (numerot.length < 7) {
  var uusinumero = randomInt(39);
  if (numerot.indexOf(uusinumero) == -1) {
      numerot.push(uusinumero);
  }
}
document.getElementById('t2_vastaus').innerHTML = numerot.toString();
}

function randomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}
