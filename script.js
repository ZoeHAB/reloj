"use strict";

//Sin modificar el archivo index.html
//Añadir un elemento que muestre la hora en tiempo real
//Debe tener formato HH:MM:SS
//Debe actualizarse cada segundo

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//Bonus: los dos puntos parpadean

let body = document.querySelector("body");

let h1 = document.createElement("h1");
updateClock();
body.append(h1);

setInterval(updateClock, 1000);

function updateClock() {
  let now = new Date();
  //console.log(now);

  let hours = format(now.getHours());
  let minutes = format(now.getMinutes());
  let seconds = format(now.getSeconds());

  if (seconds % 2) {
    h1.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    h1.textContent = `${hours} ${minutes} ${seconds}`;
  }

  //console.log(hours, minutes, seconds);
}

function format(num) {
  if (num < 10) {
    return "0" + num;
  }

  return num;
}
