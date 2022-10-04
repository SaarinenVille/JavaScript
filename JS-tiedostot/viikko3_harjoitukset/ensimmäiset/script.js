function parillinen() {

  var luku = parseInt(document.getElementById('syotto').value);
  var tulosta = 0
  for(var i = 2; i <= luku; i = i + 2) {
    tulosta += i;
    tulosta += " ";
  }
  document.getElementById('parilliset').innerHTML = tulosta;
}







function tulostaParilliset()
{
  var karvo = parseInt(document.getElementById('pluku').value);
  var jono = "<p>";
  for(var i = 2; i <= karvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}
