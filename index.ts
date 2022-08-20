let title: string = "Tabata";
document.getElementById('app.title').innerHTML = title;

let ciclo: string = "Ciclo";
document.getElementById('app.ciclo').innerHTML = ciclo;

let temp: string = "Temporizador";
document.getElementById('app.temp').innerHTML = temp;

//Counter
let counter = 0;


let intervalId = setInterval(() => {
  counter++;
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);

let intervalIdTemporizador = setInterval(() => {
  counter+1;
  document.getElementById('app.counterTemp').innerHTML = counter.toString();
}, 1000);


