/* wrapper: wrap around an observable and add another observable to run when the first throw an error */

import { interval, onErrorResumeNext, of } from "rxjs";
import { map } from "rxjs/operators";

onErrorResumeNext(
    interval(300).pipe(
        map((num: number) => {
            if (num > 8) {
                throw Error('no')
            }
            return num
        }),

    ),
    of(55),
)

    .subscribe({
        next: x => console.log(x),
        error: err => console.log(err.message)
    })


