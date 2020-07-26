/* retry for a given number of times if faced an error */

import { interval } from "rxjs";
import { retry, map } from "rxjs/operators";

interval(300).pipe(
    map((num: number) => {
        if (num > 8) {
            throw Error('no')
        }
        return num
    }),
    retry(2)
).subscribe({
    next: x => console.log(x),
    error: err => console.log(err.message)
})


