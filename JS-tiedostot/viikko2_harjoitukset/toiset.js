function tarkista()
{
var numero;
numero = parseInt(document.getElementById('luku').value);

if (numero >= 0)
{
  document.write("Luku on positiivinen");
}
else
{
  document.write("Luku on negatiivininen");
}
}
