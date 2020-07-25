/* like debounceTime but it emits a value at a fixed timed window. This meeans that sometimes the value emitted is brand new and has just been emitted by an inner
 obeservable. In debounce, though, it always waits until no new values are emiited. In debounce time, we can wait for a very long period of time till we see somehting
 if the inner obeservables are active.
 */

import { combineLatest, from, } from 'rxjs'
import { map, auditTime } from 'rxjs/operators'

const weights$ = from([90, 88, 85, 82, 80, 79, 75, 70, 80, 89])
const heights$ = from([1.68, 1.7, 1.75])

combineLatest(weights$, heights$).pipe(
    auditTime(3),
    map(([w, h]) => {
        console.log('combineLatest', w,h)
        return w / (h * h)
    })
).subscribe(s => console.log(s))

