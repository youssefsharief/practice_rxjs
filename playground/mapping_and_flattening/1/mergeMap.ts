/* 

like mergeAll in that it does not respect order of inner observables 

*/

import { interval } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';


interval(500)
    .pipe(
        take(10),
        mergeMap(num =>
            interval(300).pipe(
                take(4),
                map(x => num * x)
            )
        ),
    )
    .subscribe(x => console.log(x));