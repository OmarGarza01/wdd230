// Menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

// get current date
const event = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const date = event.toLocaleDateString(undefined, options);
document.getElementById("currentDate").innerHTML = date;
