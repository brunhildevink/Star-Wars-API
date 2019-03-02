let wrapper = document.getElementById("wrapper");
let table = document.querySelector("table");
var url= "https://swapi.co/api/people/";
var personId = new URL(window.location.href).searchParams.get("personId");
var personId = personId == undefined ? 1 : personId;

doAjax(url + personId);

function generateContent(data) {
    let html = `
      <caption><h2>${data.name} </h2></caption>
      <tr>
        <th><h3>Height:</h3></th>
        <td><h3>${data.height} cm</h3></td>
      </tr>
      <tr>
        <th><h3>weight:</h3></th>
        <td><h3>${data.mass} kg</h3></td>
      </tr>
      <tr>
        <th><h3>Hair Color:</h3></th>
        <td><h3>${data.hair_color}</td></h3>
      </tr>
      <tr>
        <th><h3>Skin Color:</h3></th>
        <td><h3>${data.skin_color}</h3></td>
      </tr>
      <tr>
        <th><h3> Eye Color:</h3></th>
        <td><h3>${data.eye_color}</h3></td>
      </tr>
      <tr>
        <th><h3>Birth Year:</h3></th>
        <td><h3>${data.birth_year}</h3></td>
      </tr>
      <tr>
        <th><h3>Gender:</h3></th>
        <td><h3>${data.gender}</h3></td>
      </tr>
      <tr>
        <th><h3>Hair Color:</h3></th>
        <td><h3>${data.hair_color}</h3></td>
      </tr>
    `
    table.innerHTML = html;
}

$( "#button" ).click(function(event) {
  event.preventDefault();
  doAjax(url + randomNumber());
});

function doAjax(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => generateContent(data))
}

function randomNumber() {
    return Math.floor((Math.random() * 20) + 1);
}
