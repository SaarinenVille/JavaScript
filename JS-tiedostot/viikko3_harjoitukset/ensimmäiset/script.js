function parillinen() {

  var luku = parseInt(document.getElementById('syotto').value);
  var tulosta = 0
  for(var i = 2; i <= luku; i = i + 2) {
    tulosta += i;
    tulosta += " ";
  }
  document.getElementById('parilliset').innerHTML = tulosta;
}
