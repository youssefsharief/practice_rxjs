import { first } from "rxjs/operators";
import { MonoTypeOperatorFunction, of } from "rxjs";

function fitstTruthy<T>(): MonoTypeOperatorFunction<T> {
    return (source) => source.pipe(
        first(data => Boolean(data)),
    )
}

of(0, '', 'foo', 69).pipe(
    fitstTruthy()
).subscribe(
    x => console.log(x)
)