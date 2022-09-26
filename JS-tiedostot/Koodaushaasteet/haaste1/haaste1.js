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
