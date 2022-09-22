function tulosta() //Nimetään functio, joka haetaan button-painikkeella
{
    var etunimi = document.getElementById('enimi').value; //Määritetään muuttuja etunimi, ja haetaan html-elementistä = id="enimi"
    var sukunimi = document.getElementById('snimi').value;
    if(etunimi < 1 || sukunimi < 1) // Voi käyttää useampaa tapaa: esim. etunimi == ""
    {
      alert("Et syöttänyt pyydettyjä tietoja. Ole hyvä ja täytä kaikki tiedot!"); 
    }
    else
    {
      document.getElementById('vastaus1').innerHTML = "Hei" + " " + etunimi + " " + sukunimi + "!";
    }
}
