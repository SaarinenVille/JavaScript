function parillinen() {

  var luku = parseInt(document.getElementById('syotto').value);
  var tulosta = 0
  for(var i = 2; i <= luku; i = i + 2) {
    tulosta += i;
    tulosta += " ";
  }
  document.getElementById('parilliset').innerHTML = tulosta;
}

function salasanaksi() {

var sana = document.getElementById('sana').value;
var salasana = "";

for(var j = 0; j < sana.length; j++) {
  salasana += sana[j] + "Ö";
}
salasana += ""
document.getElementById('salasana').innerHTML = salasana;
}

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

function kertoma() {

  var numero = parseInt(document.getElementById('t4_syotto').value);
  var vast = 1;

  for(var l = 1; l <= numero; l++) {
    vast *= l;
  }
  document.getElementById('t4_vastaus').innerHTML = vast;
}

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
