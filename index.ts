let title: string = 'Tabata';
document.getElementById('app.title').innerHTML = title;

let ciclo: string = 'Ciclo';
document.getElementById('app.ciclo').innerHTML = ciclo;

let temp: string = 'Work';
document.getElementById('app.temp').innerHTML = temp;

let rest: string = 'Rest';
document.getElementById('app.rest').innerHTML = rest;

//Counter
let counter: number = 0;

let restTimer = 0;

let cicloTimer = 0;

let intervalId = setInterval(() => {
  counter++;
  document.getElementById('app.counterTemp').innerHTML = counter.toString();

  if (counter == 20) {
    counter = 0;
  }

    if (counter == 20) {
      restTimer++;
      document.getElementById('app.counterRest').innerHTML = restTimer.toString();
    }

      if (restTimer == 10) {
        cicloTimer++;
        document.getElementById('app.counter').innerHTML = cicloTimer.toString();
      }
}, 100);
