import { interval, Observable, Observer, Subject } from "rxjs";

// Otra forma de crear subscriber
const observer: Observer<any> = {
  next: (value) => console.log("[NEXT]:", value),
  error: (err) => console.error("[ERROR]:", err),
  complete: () => console.log("[COMPLETE]"),
};

const interval$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId);
    console.log("INTERVAL DESTROYED");
  };
});

// 1. Multiple casting
// 2. Too is an Observer
// 3. next, error and complete
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);

// const subs1 = interval$.subscribe((rnd) => console.log("[SUBS1]", rnd));
// const subs2 = interval$.subscribe((rnd) => console.log("[SUBS2]", rnd));
