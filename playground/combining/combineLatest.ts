// emits an array once all observables emit their first value. when any observable emits a new value the combinelatest emits the same array again but with the updated values.
// useful when you want to calculate somthing based on the latest readings like for example the body mass index
// throttleTime does not work with combineLatest. The combineLatest emits and ends from the first emitted value

import { combineLatest, interval, from, of, forkJoin } from 'rxjs'
import { map, delay, debounceTime } from 'rxjs/operators'

const weights$ = from([90, 88, 85, 82, 80, 79, 75, 70, 80, 89]).pipe(debounceTime(300))
const heights$ = from([1.68, 1.7, 1.75]).pipe(debounceTime(1000))

of()

combineLatest(weights$, heights$).pipe(
    map(([w, h]) => {
        console.log('combineLatest', w,h)
        return w / (h * h)
    })
).subscribe(s => console.log(s))

forkJoin(weights$, heights$).pipe(
    map(([w, h]) => {
        console.log('forkJoin', w,h)
        return w / (h * h)
    })
).subscribe(s => console.log(s))