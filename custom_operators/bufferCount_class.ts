import { interval, OperatorFunction, Observable, PartialObserver } from 'rxjs'
import { map } from 'rxjs/operators'

function bufferCount<T>(num: number): OperatorFunction<T, T[]> {
    return (source) => new Observable(
        destination => {
            const observer = new BufferCountObserver(destination, num)
            return source.subscribe(observer)
        }
    )
}


export class BufferCountObserver<T> {
    destination: PartialObserver<T[]>
    buffer: T[] = []
    bufferSize
    constructor(destination, bufferSize) {
        this.destination = destination
        this.bufferSize = bufferSize
    }
    next(x: T) {
        this.buffer.push(x)
        if (this.buffer.length % this.bufferSize === 0) {
            this.destination.next(this.buffer);
            this.buffer = []
        }
    }
    error(err) { this.destination.error(err); }
    complete() { this.destination.complete(); }
}


interval(1000).pipe(
    map(x => Math.random().toString(36).substring(2)),
    bufferCount(3)
).subscribe(
    x => console.log(x)
)
console.log('a')