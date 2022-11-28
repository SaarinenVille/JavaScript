/*
function Henkilo(etunimi, sukunimi, ika) {
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.ika = ika;

  this.tiedot = NaytaTiedot;
}

  function NaytaTiedot() {
    var etunimi = this.etunimi;
    var sukunimi = this.sukunimi;
    var ika = this.ika;

    console.log(Ville);
  }

  var Ville = new Henkilo("Ville", "Saarinen", 38);
  remove(Ville).ika;
*/

/*
function tiedot() {
  var keho = {
   "kasivarsiVasen": {
     "olkavarsi" : "hauis",
     "kyynervarsi": "ranne",
     "kammen": "peukalo"
     },
     "ruumis": {
       "ylaruumis": "rintalihakset",
       "alaruumis": "vatsa"
     }
}
 keho.saika = "22.05.1965";
 keho["saika"] = "1.1.1985";
console.log(keho)
}
*/

/*
function tiedot() {
let lause = "Heippa maailma, onpa hyvä ilma";
let sana = /ilma/g;
console.log(lause.match(sana));
}
*/

function tiedot() {
/*
let lause = "Maailmassa monta on ihmeellistä asiaa";

let sana = /a+/ig;


console.log(lause.match(sana))
}
*/

/*
let lause = "Etsi tästä lauseesta sana";

let sana = /etsi/;
console.log(sana.test(lause));
}
*/

/*
let lause = "Olipa kerran kana, jonka takana oli musta lakana. Pakana, sanoi kana, ja käytti niittiä hakana."

let sana = /[t,p]akana/ig;
console.log(lause.match(sana))
}
*/

/*
let lause = "Olipa kerran kisa ja kissa";
let sana = /kis+a/g;
console.log(lause.match(sana))
}
*/

/*
let lause = "Olipa kerran kana, jonka takana oli musta lakana. Pakana, sanoi kana, ja käytti niittiä hakana.";

let sana = /[^h,i,j,k,l,m,n]akana/gi;

console.log(lause.match(sana))
}
*/

/*
let lause = "Etsi lauseesta oikea sana";

let sana = /sana/;

console.log(sana.test(lause));
}
*/

/*
let lause = "Mantalla on panta päässä ja santaa varpaissa ja kantapäissä ja kädessä rantapallo";

let sana = /[m,p,s]anta/gi;

console.log(lause.match(sana));
}
*/

let lause = "      Heippa maailma     ";

console.log(lause.trim());
}
