//SUBMIT FORM VARIABLES
const submitButton = document.getElementById("submit");
const playerName = document.getElementById("player");
const form = document.getElementById("form");

submitButton.addEventListener("click", (event) => {
  console.log(playerName.value);
  event.preventDefault();
  form.reset();
});
