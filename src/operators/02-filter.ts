import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

const range$ = range(20, 30);

const rangeFilter$ = range$.pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);

// rangeFilter$.subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: "hero",
    name: "Batman",
  },
  {
    type: "hero",
    name: "Robin",
  },
  {
    type: "enemy",
    name: "Joker",
  },
];

const charactersObs$ = from(characters);

const charactersFilter$ = charactersObs$.pipe(filter((val) => val.type === "enemy"));

charactersFilter$.subscribe(console.log);

// Chaining operators

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((evt) => evt.code),
  filter((key) => key === "Enter")
);

keyUp$.subscribe(console.log);
