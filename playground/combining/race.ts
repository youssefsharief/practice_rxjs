import {interval, race} from 'rxjs'
import {map } from 'rxjs/operators'


// the on that emits first keeps on emitting and the rest are killed
race(
    interval(300).pipe(map((x => '300 one'))),
    interval(200).pipe(map((x => '200 one'))),
    interval(500).pipe(map((x => '500 one')))
).subscribe(x => console.log(x))