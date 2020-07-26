// emits an array once all observables emit their first value. when any observable emits a new value the combinelatest emits the same array again but with the updated values.
// useful when you want to calculate somthing based on the latest readings like for example the body mass index
// throttleTime does not work with combineLatest. The combineLatest emits and ends from the first emitted value

import { combineLatest, interval } from 'rxjs'
import { map } from 'rxjs/operators'

const weights = [90, 88, 85, 82, 80, 79, 75, 70, 72, 73, 75, 77, 80, 81, 85, 89]
const heights = [1.71,  1.72, 1.73, 1.74, 1.75]
const weightsInterval$ = interval(300).pipe(
    map((v, index) => weights[index] )
) 

const heightsInterval$ = interval(1000).pipe(
    map((v, index) => heights[index] )
) 

combineLatest(weightsInterval$, heightsInterval$).pipe(
    map(([w, h]) => {
        console.log('combineLatest', w,h)
        return w / (h * h)
    })
).subscribe(s => console.log(s))