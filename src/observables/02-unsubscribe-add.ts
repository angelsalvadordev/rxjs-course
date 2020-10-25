import { Observable, Observer } from "rxjs";

// Otra forma de crear subscriber
const observer: Observer<any> = {
  next: (value) => console.log("[NEXT]:", value),
  error: (err) => console.error("[ERROR]:", err),
  complete: () => console.log("[COMPLETE]"),
};

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;

  // Create a counter
  const interval = setInterval(() => {
    subscriber.next(count);
    count++;
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 3000);

  return () => {
    clearInterval(interval);
    console.log("INTERVAL DESTROYED");
  };
});

const subs = interval$.subscribe(observer);
const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);

subs.add(subs1).add(subs2);

setTimeout(() => {
  subs.unsubscribe();
  console.log("TIMEOUT COMPLETED");
}, 3000);
