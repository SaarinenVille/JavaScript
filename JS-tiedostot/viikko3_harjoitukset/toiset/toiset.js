// Ohjelma pisteyttää sanan kirjaimet
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

// Ohjelma arpoo 7 numeroa 39:stä numerosta
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

// Ohjelma järjestää luvut taulukkomuotoon
function taulukko() {

  var luvut = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
  var table = '<table border="1">';

  for(var i = 0; i < luvut.length; i++) {
    table += '<tr>';
    for(var j = 0; j < luvut[i].length; j++) {
      table += '<td>' + luvut[i][j];
    }
  }
  table += '</table>';
  document.getElementById('t3_vastaus').innerHTML = table;
}
