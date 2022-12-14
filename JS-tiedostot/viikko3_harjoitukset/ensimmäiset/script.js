// Tulostaa parilliset luvut syötettyyn lukuun asti
function parillinen() {

  var luku = parseInt(document.getElementById('syotto').value);
  var tulosta = 0
  for(var i = 2; i <= luku; i = i + 2) {
    tulosta += i;
    tulosta += " ";
  }
  document.getElementById('parilliset').innerHTML = tulosta;
}

// Lisää Ö-kirjaimen syötetyn sanan kaikkien kirjaimien väliin
function salasanaksi() {

  var sana = document.getElementById('sana').value;
  var salasana = "";

  for(var j = 0; j < sana.length; j++) {
    salasana += sana[j] + "Ö";
  }
  salasana += ""
  document.getElementById('salasana').innerHTML = salasana;
}

// Tarkastaa, sisältääkö annettu sana Ö-kirjainta
function onkoKirjainta() {
  const sana = document.getElementById('t3_syotto').value;
  var vastaus = "Ei ole";

  for(var k = 0; k < sana.length; k++) {
    if(sana[k] == "Ö" || sana[k] == "ö")
    {
      vastaus = "On";
    }
  }
  document.getElementById('onko').innerHTML = vastaus;
}

// Laskee syötetyn numeron kertoman (kertoo kaikilla itseään pienemmillä luvuilla)
function kertoma() {
  var numero = parseInt(document.getElementById('t4_syotto').value);
  var vast = 1;

  for(var l = 1; l <= numero; l++) {
    vast *= l;
  }
  document.getElementById('t4_vastaus').innerHTML = vast;
}

// Tulostaa numerot sataana asti. Kolmella jaolliset tulostetaan hip, viidellä jaolliset heijaa ja 3 sekä 5 jaolliset hipheijaa
function hipHeijaa() {
  var lukujono = "";

  for(var z = 1; z <= 100; z++)
  {
    if(z % 3 == 0 && z % 5 == 0)
    {
      lukujono += " hip heijaa ";
    }
    else if(z % 5 == 0)
    {
      lukujono += " heijaa ";
    }
    else if (z % 3 == 0)
    {
      lukujono += " hip ";
    }
    else
    {
      lukujono += z + " ";
    }
  }
  document.getElementById('t5_vastaus').innerHTML = lukujono;
}

// Tulostaa numerot 1-10
function ensimmaiset() {
  var numerot = "";

  for (var i = 1; i <= 10; i++) {
  numerot += i;
}
document.getElementById('t6_vastaus').innerHTML = numerot;
}

// Laskee lukujen 1-10 summan
function laske() {
  var numerot = 0;

  for (var i = 1; i <= 10; i++) {
  numerot += i;
}
document.getElementById('t7_vastaus').innerHTML = numerot;
}

// Laskee ensimmäisen luvun toisen luvun potenssiin
function laskePotenssi() {
  var luku1 = parseInt(document.getElementById('t8_syotto1').value);
  var potenssiLuku = parseInt(document.getElementById('t8_syotto2').value);
  var yhteensa = luku1;

  for (var i = 1; i < potenssiLuku; i++) {
    yhteensa *= luku1;
  }
  document.getElementById('t8_vastaus').innerHTML = yhteensa;
}

// Etsii luvuista pienimmän ja suurimman
function pieninSuurin() {
  var luku1 = parseInt(document.getElementById('i1').value);
  var luku2 = parseInt(document.getElementById('i2').value);
  var luku3 = parseInt(document.getElementById('i3').value);
  var luku4 = parseInt(document.getElementById('i4').value);
  var luku5 = parseInt(document.getElementById('i5').value);

  var largest =  Math.max(luku1,luku2,luku3,luku4,luku5);
  var smallest = Math.min(luku1,luku2,luku3,luku4,luku5);

  document.getElementById('t9_vastaus').innerHTML = "Pienin luku on " + smallest + " ja suurin luku on " + largest;
}

// Lisää annetun sanan jokaisen kirjaimen väliin random kirjaimen
function randSalasana() {

  var sana = document.getElementById('t10_sana').value;
  var salasana = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyzåäö"

  for(var j = 0; j < sana.length; j++) {
    salasana += sana[j] + alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  document.getElementById('t10_vastaus').innerHTML = salasana;
}

// Tulostaa parilliset ja parittomat luvut ja niiden summan
function numerotJaSumma() {

  var pienempi = parseInt(document.getElementById('nro1').value);
  var suurempi = parseInt(document.getElementById('nro2').value);
  var paritSum = 0;
  var parilSum = 0;



  if (pienempi % 2 != 0) {
    document.write("Parittomat: ");
    for (var i = pienempi; i <= suurempi; i += 2) {
      document.write(i + " ");
      paritSum += i;
    }
    document.write(": ja niiden summa on " + paritSum + "<br>");

    document.write("Parilliset: ")
    for (var j = pienempi + 1; j <= suurempi; j += 2) {
      document.write(j + " ");
      parilSum += j;
    }
    document.write(": ja niiden summa on " + parilSum);
    }

  else if (pienempi % 2 == 0) {
    document.write("Parilliset: ");
    for (var i = pienempi; i <= suurempi; i += 2) {
      document.write(i + " ");
      parilSum += i;
    }
    document.write(": ja niiden summa on " + parilSum + "<br>");
    
    document.write("Parittomat: ")
    for (var j = pienempi + 1; j <= suurempi; j += 2) {
      document.write(j + " ");
      paritSum += j;
    }
      document.write(": ja niiden summa on " + paritSum);

  }
}
