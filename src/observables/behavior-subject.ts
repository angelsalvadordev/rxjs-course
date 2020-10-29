import { BehaviorSubject } from "rxjs";

const bs = new BehaviorSubject(123);

bs.subscribe((val) => console.log("[SUBSCRIBER 1]", val));
bs.subscribe((val) => console.log("[SUBSCRIBER 2]", val));

bs.next(456);

bs.subscribe((val) => console.log("[SUBSCRIBER 3]", val));

bs.next(789);
