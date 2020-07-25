import { interval } from 'rxjs'
import { take, map } from 'rxjs/operators'

// emit sequence each x milliseconds
interval(60).pipe(
    take(5),
    map(n => `hello ${n}`)
).subscribe(c => console.log(c))