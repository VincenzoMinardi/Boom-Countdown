//Variabile di dover arrivare a fine countdown
let dateCountDown = new Date("april 28, 2023 9:30:00").getTime();

// eseguiamo un countdown 1 secondo alla volta
let secondDown = setInterval(function() {

  // Inserire data e l'ora del giorno che viene fatto
  let now = new Date().getTime();

  // Troviamo la data del giorno di oggi e la data del conto alla roveriscia
  let distance = dateCountDown - now;

  // calcoliamo il tempo del giorno seguente, secondo per secondo
  let days = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (24 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (24 * 60 * 60)) / 1000);

  // Visualizziamo il risultato usando l'id 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Se il conto la rovescia è terminato, scriviamo del testo
  if (distance < 0) {
    clearInterval(secondDown)
    document.querySelector('#demo').innerHTML = "FINITOO!!!!";
  }
}, 1000);