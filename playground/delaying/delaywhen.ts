// like delay but you can access the values of the first observable and you return an observable
import { interval, of, OperatorFunction, Observable, MonoTypeOperatorFunction, merge } from 'rxjs';
import { delayWhen, take, mergeMap } from 'rxjs/operators';

// of(2000, 3000, 4000, 5000, 6000)
//     .pipe(
//         delayWhen((value) => interval(value)),
//     )
//     .subscribe(x => console.log(x));


function delayWhenCustom<T>(delayDurationSelector: (value: T, index: number) => Observable<any>): MonoTypeOperatorFunction<T> {
    return (source) => new Observable(
        destination => {
            let i = 0

            source.pipe(
                mergeMap((x) => delayDurationSelector(x, i)),
                take(4)
            ).subscribe({
                next(x) {
                    destination.next(x)
                    i++
                },
                error(err) { destination.error(err); },
                complete() { destination.complete(); }
            })
        }
    )
}

of(2000, 3000, 4000, 5000, 6000)
    .pipe(
        delayWhenCustom((value) => interval(value)),
    )
    .subscribe(x => console.log(x));
