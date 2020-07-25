import { interval, OperatorFunction, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

function bufferCount<T>(num: number): OperatorFunction<T, T[]> {
    return (source) => new Observable(
        destination => {
            let buffer = []
            return source.subscribe({
                next(x) {
                    buffer.push(x)
                    if (buffer.length % num === 0) {
                        destination.next(buffer);
                        buffer = []
                    }
                },
                error(err) { destination.error(err); },
                complete() { destination.complete(); }
            })
        }
    )
}



interval(1000).pipe(
    map(x => Math.random().toString(36).substring(2)),
    bufferCount(3)
).subscribe(
    x => console.log(x)
)
console.log('a')