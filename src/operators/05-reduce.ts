import { interval } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, curr: number) => {
  return acc + curr;
};

const total = numbers.reduce(totalReducer);
console.log(total);

interval(1000)
  .pipe(take(3), reduce(totalReducer, 5))
  .subscribe({
    next: (val) => console.log("Next: ", val),
    complete: () => console.log("Complete"),
  });
