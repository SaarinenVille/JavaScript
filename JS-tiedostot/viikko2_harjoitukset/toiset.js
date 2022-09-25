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

// Harjoitus 3 - Määtittää onko annettu vuosi karkausvuosi
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
