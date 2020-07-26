/* 
    operator: No observable values are emiited unless we finish emitting values for the one before it. It is like mergeAll but with the concurrent value set to 1
    
*/

import { interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

interval(500)
    .pipe(
        take(10),
        map(num =>
            interval(300).pipe(
                take(4),
                map(x => num * x)
            )
        ),
        concatAll(),
    )
    .subscribe(x => console.log(x));