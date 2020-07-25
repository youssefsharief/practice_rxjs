// like delayWhen but this time you pick an instance from the second observable where the accumulated values from the first observable would get emitted 
import { interval, OperatorFunction, Observable } from 'rxjs';
import { bufferWhen, take } from 'rxjs/operators';

interval(500)
    .pipe(
        bufferWhen(() => interval(1000)),
        take(4)
    )
    .subscribe(x => console.log(x));


function bufferWhenCustom<T>(closingSelector: () => Observable<any>): OperatorFunction<T, T[]> {
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