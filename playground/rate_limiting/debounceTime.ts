/* does not emit any values till the user stops spamming. That's very bad if someone is in hurry.


*/

import { combineLatest, from, } from 'rxjs'
import { map, debounceTime } from 'rxjs/operators'

const weights$ = from([90, 88, 85, 82, 80, 79, 75, 70, 80, 89])
const heights$ = from([1.68, 1.7, 1.75])

combineLatest(weights$, heights$).pipe(
    debounceTime(30000),
    map(([w, h]) => {
        console.log('combineLatest', w,h)
        return w / (h * h)
    })
).subscribe(s => console.log(s))

