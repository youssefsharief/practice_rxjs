/* 

like concatAll. It does not permit the second observable to emit before the first one finish 

*/

import { interval } from 'rxjs';
import { map, take, concatMap } from 'rxjs/operators';


interval(500)
    .pipe(
        take(10),
        concatMap(num =>
            interval(300).pipe(
                take(4),
                map(x => num * x)
            )
        ),
    )
    .subscribe(x => console.log(x));