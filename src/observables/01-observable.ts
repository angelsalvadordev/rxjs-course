import { Observable, Observer } from "rxjs";

// Otra forma de crear subscriber
const observer: Observer<any> = {
  next: (value) => console.log("[NEXT]:", value),
  error: (err) => console.error("[ERROR]:", err),
  complete: () => console.log("[COMPLETE]"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hello");
  subs.next("World");

  subs.next("Hello");
  subs.next("World");

  // Forzando error
  const a = undefined;
  a.hello = "hello";

  subs.complete();
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (value) => console.log("[NEXT]: ", value),
//   (error) => console.error("[ERROR]: ", error),
//   () => console.info("[COMPLETE]")
// );
