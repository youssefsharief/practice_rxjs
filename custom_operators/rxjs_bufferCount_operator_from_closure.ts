import { interval, OperatorFunction } from 'rxjs'
import { map, filter } from 'rxjs/operators'

function bufferCountClosure<T>(num: number) {
    let buffer: T[] = []
    return (singleItem: T) => {
        buffer.push(singleItem)
        if (buffer.length % num === 0) {
            const toReturn = [...buffer]
            buffer = []
            return toReturn
        }
    }
}

function bufferCount<T>(num: number): OperatorFunction<T, T[]> {
    const fn = bufferCountClosure<T>(num)
    return (source) => source.pipe(
        map((data) => fn(data)),
        filter(x => x ? true : false)
    )
}



interval(1000).pipe(
    map(x => Math.random().toString(36).substring(2)),
    bufferCount(3)
).subscribe(
    x => console.log(x)
)