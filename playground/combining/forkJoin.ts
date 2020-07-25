import {forkJoin, from, of, timer} from 'rxjs'
import {delay, take} from 'rxjs/operators'

// emits the last emitted value from each observable in an array at the end
forkJoin([
    from([6,6,5,4,56,4,4,3,5,3,5,6]).pipe(delay(2000)),
    of(1,2,3),
    timer(200).pipe(take(4))
])
.subscribe(x => console.log(x))