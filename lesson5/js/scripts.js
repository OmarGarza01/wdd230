function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

const event = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const date = event.toLocaleDateString(undefined, options);
document.getElementById("currentDate").innerHTML = date;

// close banner
document.querySelector(".banner_close").addEventListener("click", function () {
  this.closest(".banner").remove();
});


// load banner on friday
var today = new Date();
if(today.getDay() == !5) {
  const friday = document.querySelector("#friday")
  friday.remove();
}


