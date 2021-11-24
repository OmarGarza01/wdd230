// close banner
document.querySelector(".banner_close").addEventListener("click", function () {
    this.closest(".banner").remove();
  });
  
  
  // load banner on friday
  var today = new Date();
  if(today.getDay() != 5) {
    const friday = document.querySelector("#friday")
    friday.remove()
  }