


function henkilonLisays() {
  const uusiHenkilo = document.getElementById('henkilo');
  var tiedot = document.createElement('select');
  tiedot.setAttribute('id', 'tiedot');
  var tulo1 = document.createElement('option');
  tulo1.text = "Tulonlähde";
  var tulo2 = document.createElement('option');
  tulo2.text = "Palkka";
  var tulo3 = document.createElement('option');
  tulo3.text = "Kuntoutusraha";
  var tulo4 = document.createElement('option');
  tulo4.text = "Kotihoidontuki";
  var tulo5 = document.createElement('option');
  tulo5.text = "Lapsilisä";
  uusiHenkilo.appendChild(tiedot);
  tiedot.appendChild(tulo1);
  tiedot.appendChild(tulo2);
  tiedot.appendChild(tulo3);
  tiedot.appendChild(tulo4);
  tiedot.appendChild(tulo5);
}
