/* like retry but have more options. You can have tap and dely for example. and you can catch error before subscribing */



import { interval } from "rxjs";
import { retryWhen, tap, delay, map } from "rxjs/operators";

interval(300).pipe(
    map((num: number) => {
        if (num > 8) {
            throw Error('no')
        }
        return num
    }),
    retryWhen(errors =>
        errors.pipe(
            tap(err => console.log(err.message)),
            delay(4000)
        )

    )
).subscribe({
    next: x => console.log(x),
})


