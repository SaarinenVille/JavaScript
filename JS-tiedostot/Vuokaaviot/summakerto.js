function sumOrTimes() {
// Luodaan muuttujat ja luetaan niihin käyttäjän antamat luvut
  var luku1 = parseInt(document.getElementById('syotto_1').value);
  var luku2 = parseInt(document.getElementById('syotto_2').value);

// Määritetään muuttujat laskutoimitukselle
  var summa = luku1 + luku2;
  var kerto = luku1 * luku2;
// Määritetään radiobuttoneilla halutaanko kertoa vai laskea
  if (document.getElementById('radiosum').checked) {

  document.getElementById('vastaus').innerHTML = summa;
  }

  else if (document.getElementById('radiotimes').checked) {
  document.getElementById('vastaus').innerHTML = kerto;
  }


}
