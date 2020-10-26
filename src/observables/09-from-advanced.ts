import { of, from } from "rxjs";

// of => tiene argumentos y genera una secuencia
// from => en base a un array, promise, iterable, observable

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const generator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = generator();

// for (let id of iterable) {
//   console.log(id);
// }

from(iterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from("Angel");
const source$ = from(fetch("https://api.github.com/users/angelsalvadordev"));

// source$.subscribe(async (resp) => {
//   const data = await resp.json();
//   console.log(data);
// });
