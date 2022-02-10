document.getElementById("second-heading").innerHTML = "Hey class...";

const getDataButton = document.getElementById("get-data");
getDataButton.addEventListener("click", () => {
  console.log("testing here");

  function displayData(allbeers) {
    document.querySelector("pre").innerHTML = JSON.stringify(allbeers, null, 2);
  }

  fetch("https://api.sampleapis.com/beers/ale")
    .then((data) => data.json())
    .then((beers) => displayData(beers))
    .catch((err) => console.log(err));
});
function showAlert() {
  alert("hey class, we are done!");
}

const alertButton = document.getElementById("show-alert-btn");
alertButton.addEventListener("click", showAlert);
