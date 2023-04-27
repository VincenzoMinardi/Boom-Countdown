//Variabile di dover arrivare a fine countdown
let dateCountDown = new Date("april 28, 2023 9:30:00").getTime();

// eseguiamo un countdown 1 secondo alla volta
let secondDown = setInterval(function() {

  // Inserire data e l'ora del giorno che viene fatto
  let now = new Date().getTime();

  // Troviamo la data del giorno di oggi e la data del conto alla roveriscia
  let distance = dateCountDown - now;

  // calcoliamo il tempo del giorno seguente, secondo per secondo
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);