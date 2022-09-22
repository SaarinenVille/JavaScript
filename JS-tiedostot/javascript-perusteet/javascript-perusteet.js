function laskut()

{
  //Määritellään muuttujat
  var luku1, luku2, summa, erotus, osamaara, tulo;
  luku1 = 20;
  luku2 = 5;
  summa = luku1 + luku2;
  erotus = luku1 - luku2;
  osamaara = luku1 / luku2;
  tulo = luku1 * luku2;

  //Tulostaa lopputuloksen
  console.log("Summa = " + summa);
  console.log("Erotus = " + erotus);
  console.log("Osamäärä = " + osamaara);
  console.log("tulo = " + tulo);
}

function liitaSanat()
{
  var t1, t2, t3;
  t1 = "Hyvää ";
  t2 = "päivää ";
  t3 = "maailma!";
  console.log(t1 +t2 +t3);
}

//nimi määritellään html-tiedostossa
function attribuutti (nimi)
{
  var t1 = " on ";
  var t2 = "hyvä opettaja";
  console.log(nimi + t1 + t2);
}

function laskeYhteen(luku1, luku2)
{
  console.log(luku1 + luku2);
}
