import { of, OperatorFunction, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

of(2000, 3000, 4000, 5000, 6000)
    .pipe(
        delay((1000)),
    )
    .subscribe(x => console.log(x));


function delayWithTips<T>(num: number): OperatorFunction<T, T> {
    return (source) => new Observable(
        destination => {
            setTimeout(() => {
                return source.subscribe({
                    next(x) {
                        destination.next(x)
                    },
                    error(err) { destination.error(err); },
                    complete() { destination.complete(); }
                })
            }, num + 1000)

        }
    )
}

of(2000, 3000, 4000, 5000, 6000)
    .pipe(
        delayWithTips((10000)),
    )
    .subscribe(x => console.log(x));