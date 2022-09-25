// Harjoitus 1 - Tarkistaa, onko luku parillinen vai pariton
function tarkista()
{
var numero;
numero = parseInt(document.getElementById('luku').value);

if (numero >= 0)
{
  document.write("Luku on positiivinen");
}
else
{
  document.write("Luku on negatiivininen");
}
}

// Harjoitus 2 - Muuttaa viikonpäivät luvusta nimeksi
function viikonpaiva()
{

var viikonp = parseInt(document.getElementById('paiva').value);
switch (viikonp)
{
  case 1:
  document.write("Viikonpäivä 1 on maanantai");
  break;

  case 2:
  document.write("Viikonpäivä 2 on tiistai");
  break;

  case 3:
  document.write("Viikonpäivä 3 on keskiviikko");
  break;

  case 4:
  document.write("Viikonpäivä 4 on torstai");
  break;

  case 5:
  document.write("Viikonpäivä 5 on perjantai");
  break;

  case 6:
  document.write("Viikonpäivä 6 on lauantai");
  break;

  case 7:
  document.write("Viikonpäivä 7 on sunnuntai");
  break;

  default:
  document.write("Syötit jotain muuta.")
  break;
}
}

// Harjoitus 3 - Määrittää onko annettu vuosi karkausvuosi
function karkausvuosi()
{
var vuosiluku = parseInt(document.getElementById('vuosi').value);

if (vuosiluku%4 == 0 && vuosiluku%100 != 0)
{
  document.write("Vuosi on karkausvuosi");
}
else if (vuosiluku%400 == 0)
{
  document.write("Vuosi on karkausvuosi");
}
else
{
  document.write("Vuosi ei ole karkausvuosi");
}
}

// Harjoitus 4 - Määrittää lukujen summan ja keskiarvon
function sum_ka()
{

const numero1 = parseInt(document.getElementById('luku_1').value);
const numero2 = parseInt(document.getElementById('luku_2').value);
const numero3 = parseInt(document.getElementById('luku_3').value);
const numero4 = parseInt(document.getElementById('luku_4').value);
const numero5 = parseInt(document.getElementById('luku_5').value);

let yht = numero1 + numero2 + numero3 + numero4 + numero5;
let keskiarvo = yht / 5;

document.write("Lukujen summa on " + yht + ".");
document.write("Lukujen keskiarvo on " + keskiarvo + ".");
}

// Harjoitus 5
function lausemuuttuja()
{
var num = document.getElementById('lu').value;
var lause;
lause = num + " x 1 = " + num * 1 + "<br>";
lause += num + " x 2 = " + num * 2 + "<br>";
lause += num + " x 3 = " + num * 3 + "<br>";
lause += num + " x 4 = " + num * 4 + "<br>";
lause += num + " x 5 = " + num * 5 + "<br>";
lause += num + " x 6 = " + num * 6 + "<br>";
lause += num + " x 7 = " + num * 7 + "<br>";
lause += num + " x 8 = " + num * 8 + "<br>";
lause += num + " x 9 = " + num * 9 + "<br>";
lause += num + " x 10 = " + num * 10 + "<br>";

document.getElementById('vastaus').innerHTML = lause;







}
