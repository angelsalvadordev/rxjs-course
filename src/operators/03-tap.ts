import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const nums$ = range(1, 5);

nums$
  .pipe(
    tap((x) => console.log("before", x)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("after", val),
      complete: () => console.log("finish"),
    })
  )
  .subscribe((val) => console.log("subs", val));
