

fetch("https://ghibliapi.herokuapp.com")
  .then((response) => response.json())
  .then((data) => console.log(data));
