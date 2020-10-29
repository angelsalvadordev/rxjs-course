import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpMap$ = keyUp$.pipe(map((evt) => evt.code));
const keyUpPluck$ = keyUp$.pipe(pluck("target", "baseURI"));
const keyUpMapTo$ = keyUp$.pipe(mapTo("key pressed"));

keyUpMap$.subscribe((code) => console.log("[MAP] => ", code));
keyUpPluck$.subscribe((code) => console.log("[PLUCK] => ", code));
keyUpMapTo$.subscribe((code) => console.log("[MAP TO] => ", code));
