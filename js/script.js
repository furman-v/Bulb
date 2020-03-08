function changeColor() {
  const button = document.getElementsByClassName("fa-lightbulb")[0];
  button.style.color = "yellow";
  const statusOfTheBulb = document.getElementById("statusOfTheBulb");
  statusOfTheBulb.innerHTML = "ON";
  const background = document.getElementsByTagName("body")[0];
  background.style.backgroundColor = "white";
  const colorOfTheBulbStatus = document.getElementsByTagName("h1")[0];
  colorOfTheBulbStatus.style.color = "black";
}
function initialStyles() {
  const button = document.getElementsByClassName("fa-lightbulb")[0];
  button.style.color = "black";
  const statusOfTheBulb = document.getElementById("statusOfTheBulb");
  statusOfTheBulb.innerHTML = "OFF";
  const background = document.getElementsByTagName("body")[0];
  background.style.backgroundColor = "grey";
  const colorOfTheBulbStatus = document.getElementsByTagName("h1");
  colorOfTheBulbStatus.style.color = "white";
}
