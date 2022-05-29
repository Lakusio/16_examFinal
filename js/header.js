//Opening hours
//Code from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday&fbclid=IwAR0_dsN0i6l-NmFLAeku1fHM71bqYeUxOI9NMJ8tLQ2o1COpgbmQkSmd7Hc
const dailyHours = [
  "12:00 - 20:00",
  "12:00 - 20:00",
  "12:00 - 20:00",
  "12:00 - 20:00",
  "10:00 - 20:00",
  "12:00 - 20:00",
  "12:00 - 20:00",
];

const d = new Date();
let hours = dailyHours[d.getDay()];
let hour = d.getHours();
document.getElementById("openingHours").innerHTML = hours;

// Menu
// Collapsible code:
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Curtain menu:
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
