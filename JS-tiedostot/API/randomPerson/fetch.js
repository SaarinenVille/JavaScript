function tiedot() {
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);

    document.getElementById('person_output').innerHTML =
    "<b>Nimi: </b>" +  data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last + "<br>" +
    "<b>Osoite: </b>" +  data.results[0].location.street.number + data.results[0].location.street.name + "<br>" +
                         data.results[0].location.city + " " + data.results[0].location.state + "<br>" +
                         data.results[0].location.postcode + " " + data.results[0].location.country + "<br>" +
    "<b>Puhelin: </b>" +  data.results[0].cell + "<br>" +
    "<b>Maa: </b>" +  data.results[0].location.country + "<br>" +
    "<b>Käyttäjätunnus + salasana: </b>" + data.results[0].login.username + data.results[0].login.password + "<br>" +
    "<b>Syntymäaika: </b> " + data.results[0].dob.date + "<br>" +
    "<b>Sähköposti: </b>" + data.results[0].email + "<br>"

    document.getElementById('image_output').src = data.results[0].picture.large
});
}

function myOldComputer() {
  fetch("http://127.0.0.1:3000/JS-tiedostot/API/randomPerson/db.json")
  .then(response => response.json())
  .then(data => {
    console.log(data[0]);
    document.getElementById('old_output').innerHTML =
    "<h1>My old computer</h1>" + "<br>" +
    "<b>CPU: </b>" + data[0].myOldComputer.cpu
})
}

function myNewComputer() {
  fetch("http://127.0.0.1:3000/JS-tiedostot/API/randomPerson/db.json")
  .then(response => response.json())
  .then(data => {
    console.log(data[1]);
    document.getElementById('new_output').innerHTML =
    "<h1>My old computer</h1>" + "<br>" +
    "<b>CPU: </b>" + data[1].myNewComputer.cpu
})
}
