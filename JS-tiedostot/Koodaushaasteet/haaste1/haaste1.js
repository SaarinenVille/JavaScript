// Haaste 1
function pieninSuurin(arr)
{
  var arr = [10, 50, 25, 70, 20];
  var max = arr[0];
  var min = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  document.write("Suurin luku on " + max + "<br>");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.write("Pienin luku on " + min);
}

// Haaste 2
function parillinenPariton()
{
  var numero = document.getElementById('nro').value;

  if (numero % 2 == 0)
  {
  document.getElementById('vastaus').innerHTML = "Annoit luvun " + numero + ". " + "Luku on parillinen";
  }
  else
  {
  document.write("Annoit luvun " + numero + ". " + "Luku on pariton");
  }
}

// Haaste 3
function kuukaudet()
{
  var kuukausi = document.getElementById('kk_nro').value;

  switch (kuukausi)
  {
    case "1":
    document.write("Tammikuu");
      break;

    case "2":
    document.write("Helmikuu");
      break;

    case "3":
    document.write("Maaliskuu");
      break;

    case "4":
    document.write("Huhtikuu");
      break;

    case "5":
    document.write("Toukokuu");
      break;

    case "6":
    document.write("Kesäkuu");
      break;

    case "7":
    document.write("Heinäkuu");
      break;

    case "8":
    document.write("Elokuu");
      break;

    case "9":
    document.write("Syyskuu");
      break;

    case "10":
    document.write("Lokakuu");
      break;

    case "11":
    document.write("Marraskuu");
      break;

    case "12":
    document.write("Joulukuu");
      break;

    default:
    document.write("Annoit jotain muuta");
    break;
  }
}


// Haaste 4


function Henkilo(etunimi, sukunimi, osoite, pnum, ptp, puh, email)
{
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.osoite = osoite;
  this.postinumero = pnum;
  this.postitoimipaikka = ptp;
  this.puhelinnumero = puh;
  this.email = email;
  this.tiedot = Nayta;
}

function Nayta()
{

  document.getElementById('tulosta').innerHTML = this.etunimi + " " + this.sukunimi + "<br>" + this.osoite + "<br>" +
  this.postinumero + " " + this.postitoimipaikka + "<br>" + this.puhelinnumero + "<br>" + this.email;
}

var Ville = new Henkilo("Ville", "Saarinen", "Keskikatu 3", "04200", "Kerava", "0441234567", "ville.saarinen@edu.keuda.fi");
var Heikki = new Henkilo("Heikki", "Haikara", "Koodikatu 5", "01300", "Vantaa", "0407654321", "h.haikara@gmail.com");
var Matti = new Henkilo("Matti", "Meikäläinen", "Matinkatu 10", "001500", "Helsinki", "0501234567", "m.meikalainen@hotmail.com")


function tiedot() {
  var olio = document.getElementById('haku').value;
  switch (olio) {
    case "Ville":
    case "ville":
    Ville.tiedot();
    break;

    case "Heikki":
    case "heikki":
    Heikki.tiedot();
    break;

    case "Matti":
    case "matti":
    Matti.tiedot();
    break;

    default:
    document.getElementById('tulosta').innerHTML = "Tietoa ei löydy";
    break;
}
}
