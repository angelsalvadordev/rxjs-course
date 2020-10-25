import { of } from "rxjs";

const obs$ = of<number>(1, 2, 3, 4, 5, 6);

console.log("inicio obs$");
obs$.subscribe(
  (next) => console.log("NEXT", next),
  null,
  () => console.log("terminada la secuencia")
);

console.log("fin obs$");
