// accumalate values and return an array

import { interval, OperatorFunction, Observable } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

interval(500).pipe(
    bufferTime(2000),
    take(4)
).subscribe(x => console.log(x));


function bufferTimeCustom<T>(num: number): OperatorFunction<T, T[]> {
    return (source) => new Observable(
        destination => {
            let buffer = []
            setInterval(() => {
                destination.next(buffer)
                buffer.length = 0
            }, num)
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
    bufferTimeCustom(2000),
    take(4)
).subscribe(x => console.log(x));
