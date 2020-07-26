import { interval, throwError, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";

interval(300).pipe(
    mergeMap((num: number) => {
        if (num > 8) {
            return throwError('no')
        } else {
            return of(num)
        }
    }),
    catchError((err, caught) => caught)
).subscribe({
    next: x => console.log(x),
    error: val => console.log(val)
})


