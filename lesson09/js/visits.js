

/*
   Using local storage, display the amount of time in days 
   (rounded to a whole number) between user visits to this
   Gallery page by the user's agent (browser). You may elect to display
    this information where you deem fit on the page.
*/


let event1 = new Date()
let options1 = {
    day: "numeric",
  };
let date1 = event1.toLocaleDateString(undefined, options1);
localStorage.setItem('date',date1)



sessionStorage.setItem('date',date1)


let n1 = localStorage.getItem('date')
let n2 = sessionStorage.getItem('date')
let dif = n1-n2;

document.getElementById('visit').innerHTML = "It has been " + dif + " days since you were last here" ;



