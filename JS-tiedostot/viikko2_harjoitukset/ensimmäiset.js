function jarjesta()
{
  var luku1 = parseInt(document.getElementById('nro_1').value);
  var luku2 = parseInt(document.getElementById('nro_2').value);
  var luku3 = parseInt(document.getElementById('nro_3').value);
  document.write("Annoit luvut: " + luku1 + "," + " " + luku2 + "," + " " + luku3 + "<br>");

  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
    document.write("Luvut pienimmästä suurimpaan: " + luku1 + ", " + luku2 + ", " + luku3);
    }
    else
    {
      document.write("Luvut pienimmästä suurimpaan: " + luku1 + ", " + luku3 + ", " + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1 < luku3)
    {
      document.write("Luvut pienimmästä suurimpaan: " + luku2 + ", " + luku1 + ", " + luku3);
    }
    else
    {
      document.write("Luvut pienimmästä suurimpaan: " + luku2 + ", " + luku3 + ", " + luku1);
    }
  }
  else if(luku3 < luku1 && luku3 < luku3)
  {
    if(luku1 < luku2)
    {
      document.write("Luvut pienimmästä suurimpaan: " + luku3 + ", " + luku1 + ", " + luku2);
    }
    else
    {
      document.write("Luvut pienimmästä suurimpaan: " + luku3 + ", " + luku2 + ", " + luku1);
    }
    }
  }

  function etsiSuurin()
  {
    var luku1 = parseInt(document.getElementById('luku_1').value);
    var luku2 = parseInt(document.getElementById('luku_2').value);
    var luku3 = parseInt(document.getElementById('luku_3').value);
    var luku4 = parseInt(document.getElementById('luku_4').value);
    var luku5 = parseInt(document.getElementById('luku_5').value);

    alert("Toimii!");
    document.write("Toimii!");
  }
