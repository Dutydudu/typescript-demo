let title: string = "MyApp";
document.getElementById('app.title').innerHTML = title;

//Counter
let counter = 0;


let intervalId = setInterval(() => {
  counter++;
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);


