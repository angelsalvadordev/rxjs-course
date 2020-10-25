import { async, asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// SET TIME OUT

// Example 1
const greet = () => console.log("Hello World");
asyncScheduler.schedule(greet, 2000);

// Example 2
const greet2 = (name) => console.log(`Hello ${name}`);
// params => function, timeout, state
asyncScheduler.schedule(greet2, 2000, "Angel");

// SET INTERVAL

// Debe pasarse una funcion ordinaria y no una funcion de flecha
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    // Esta linea es la que diferencia a settimeout de setinterval
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);
