import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("[NEXT]: ", val),
  complete: () => console.log("[COMPLETE]"),
};

const today5secs = new Date();
today5secs.setSeconds(today5secs.getSeconds() + 5);

const interval$ = interval(1000);
const timer$ = timer(today5secs);

console.log("init");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("final");
