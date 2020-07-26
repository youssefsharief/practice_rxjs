/* operator: whenever the second observable emits, repeat the source */


import { from, of, interval } from "rxjs";
import { repeat, repeatWhen } from "rxjs/operators";

from([1,2,3]).pipe(
    repeatWhen(() => interval(4000))
).subscribe({
    next: x => console.log(x),
    error: err => console.log(err.message)
})


