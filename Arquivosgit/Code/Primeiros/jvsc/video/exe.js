let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
  console.log(lap1 + lap2 + lap3);
}

let lapsCompleted = 0;

function lapIncrement() {
  lapsCompleted++;
}
lapIncrement();
lapIncrement();
lapIncrement();

console.log(lapsCompleted);
