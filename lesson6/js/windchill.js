// GET WINDCHILL
let regExp = /\d+/;

let string = document.getElementById("speed").textContent;
let s = string.match(regExp);

let string2 = document.getElementById("temp").textContent;
let t = string2.match(regExp);

let f =
  35.75 +
  0.6215 * t -
  35.75 * Math.pow(s, 0.16) +
  0.4275 * t * Math.pow(s, 0.16);

if (t < 50 && s > 3)
  document.getElementById("windchill").innerHTML = Math.round(f) + " °F";
else document.getElementById("windchill").innerHTML = "not applicable";
