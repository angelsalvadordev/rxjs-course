import { from, interval } from "rxjs";
import { map, reduce, scan, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, curr: number) => acc + curr;

// Reduce
from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(totalReducer, 0)).subscribe(console.log);

// redux
interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  years?: number;
}

const user: User[] = [
  { id: "Angel", auth: false, token: null },
  { id: "Angel", auth: true, token: "ASDASJ4545%%$#" },
  { id: "Angel", auth: true, token: "hfkjkfjg$%fgf#" },
];

const state$ = from(user).pipe(
  scan<User>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { years: 27 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
