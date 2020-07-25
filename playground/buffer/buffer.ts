// accumalate values and return an array. the point in which it returns the accumalted array depends on when the second obeservabel emits something

import { interval, Observable, OperatorFunction, merge } from 'rxjs';
import { buffer, take } from 'rxjs/operators';

interval(500).pipe(
    buffer(interval(1000)),
    take(4)
).subscribe(x => console.log(x));

function bufferCustom<T>(obs: Observable<any>): OperatorFunction<T, T[]> {
    return (source) => new Observable(
        destination => {
            let buffer = []
            obs.subscribe(()=> {
                destination.next(buffer)
                buffer.length = 0
            })
            return source.subscribe({
                next(x) {
                    buffer.push(x)
                },
                error(err) { destination.error(err); },
                complete() { destination.complete(); }
            })
        }
    )
}

interval(500).pipe(
    bufferCustom(interval(1000)),
    take(4)
).subscribe(x => console.log(x));