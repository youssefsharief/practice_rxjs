// accumalate values and return an array

import { interval, OperatorFunction, Observable } from 'rxjs';
import { bufferCount, take } from 'rxjs/operators';

interval(500).pipe(
    bufferCount(3),
    take(4)
).subscribe(x => console.log(x));


function bufferCountAdd1<T>(num: number): OperatorFunction<T, T[]> {
    return (source) => new Observable(
        destination => {
            let buffer = []
            return source.subscribe({
                next(x) {
                    buffer.push(x)
                    if (buffer.length === num + 1) {
                        destination.next(buffer)
                        buffer.length = 0
                    }
                },
                error(err) { destination.error(err); },
                complete() { destination.complete(); }
            })

        }
    )
}


interval(500).pipe(
    bufferCountAdd1(3),
    take(4)
).subscribe(x => console.log(x));