function tulosta()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementsByName('kouluun');
  var kouluun;
  var aineet = document.getElementById('aineet').value;

  for (let i = 0; i < koulu.length; i++)
  {
    if(koulu[i].checked)
    {
      kouluun = koulu[i].value;
    }
  }

  if(etunimi == "" || sukunimi == "")
  {
  alert("Ole hyvä ja syötä sekä etu- että sukunimesi!");
  }
  else if (kouluun == undefined)
  {
    alert("Syötä kulkuneuvo");
  }
  else if (aineet == "")
  {
    alert("Syötä lempituntisi");
  }
  else
  {
    alert("Kiitos");
    document.getElementById("vastaus").innerHTML = "Hei! Olen " + etunimi + " " + sukunimi + " ja tulin tänään kouluun " + kouluun + ". Lempiaineeni on " + aineet + ".";
  }
}
