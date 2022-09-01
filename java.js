"use strict";

window.addEventListener("load", init);

//her laver vi vores array
const model = [
  8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 14, 16, 3, 1, 9,
  8, 30, 12, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 4, 1, 18, 1, 25,
];

function init() {
  modifyModel();
}

function loop() {
  // sætter farten for loopen
  setTimeout(init, 1000);
  displayData();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayData() {
  // vi laver en let i for at fortælle at i er lige med 0
  // hvis i er mindre end 40 så skal den pluses
  for (let i = 0; i < 40; i++) {
    console.log(i);
    const bar = document.querySelector(".bar");
    //her fortæller vi hvordan vi gerne vil style højsen i java
    bar.style.height = model[i] * 10 + "%";
    console.log(bar.style.height);
    document.querySelector("#bars").append(bar);
  }
}

function modifyModel() {
  // henter et random nr til sidst i array fra mathrandom functionen
  const qeueSize = getNumberOfCustomers();

  //tilføjer et nr til sidst i arrayet
  model.push(qeueSize);
  // shift fjerne det første i tal i arrayet
  model.shift();
  // så med push og shift vil array "loope"/køre i ring og skifte tal ud hele tiden

  console.log(model);
  loop();
}
