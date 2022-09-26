// Funktio järjestää numerot pienimmästä suurimpaan
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
  else if(luku3 < luku1 && luku3 < luku2)
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

 // Funktio jolla etsitään suurin viidestä numerosta
  function etsiSuurin()
  {
    // Määritetään muuttujat
    const luku1 = parseInt(document.getElementById('luku_1').value);
    const luku2 = parseInt(document.getElementById('luku_2').value);
    const luku3 = parseInt(document.getElementById('luku_3').value);
    const luku4 = parseInt(document.getElementById('luku_4').value);
    const luku5 = parseInt(document.getElementById('luku_5').value);
    let largest;

    // Check the condition
    if (luku1 > luku2 && luku1 > luku3 && luku1 > luku4 && luku1 > luku5)
    {
      suurin = luku1;
    }
    else if (luku2 > luku3 && luku2 > luku4 && luku2 > luku5)
    {
      suurin = luku2;
    }
    else if (luku3 > luku4 && luku3 > luku5)
    {
      suurin = luku3
    }
    else if (luku4 > luku5)
    {
      suurin = luku4;
    }
    else
    {
      suurin = luku5;
    }

    document.write("Annoit luvut: " + luku1 + ", " + luku2 + ", " + luku3 + ", " + luku4 + ", " + luku5);
    document.write("<br>Suurin niistä on: " + suurin);
  }


  // Funktio, joka kertoo onko numero parillinen vai pariton.
  function kumpi()
  {
    const luku = parseInt(document.getElementById('lu').value);

    if (luku%2 == 0)
    {
      document.write("Annoit luvun " + luku + ". " + "Luku on parillinen.");
    }
    else
    {
      document.write("Annoit luvun " + luku + ". " + "Luku on pariton.");
    }
  }


  // Funktio laskee, onko annettu luku alle 16, alle 18 vai yli 18.
  function ajoneuvo()
  {
    const ika = parseInt(document.getElementById('age').value);

    if (ika < 16)
    {
    document.write("Saat ajaa polkupyörällä");
    }
    else if (ika < 18)
    {
    document.write("Saat ajaa mopolla");
    }
    else
    {
    document.write("Saat ajaa autolla")
    }
  }


  // Funktio kääntää kielen
  function kaanna()
  {


    const valinta = document.getElementById('select').value;

    if (valinta == "eng")
    {
      document.write("Hello world!");
    }
    else if (valinta == "ruo")
    {
      document.write("Hej världen!");
    }
    else
    {
      document.write("Hola mundo!");
    }
  }
