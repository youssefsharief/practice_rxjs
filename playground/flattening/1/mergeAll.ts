/* 
    operator: anything that emits let it right away. No need to respect the order of the inner obervables. The first observable is treated like the second one
*/
import { interval } from 'rxjs';
import { take, mergeAll, map } from 'rxjs/operators';


interval(500)
    .pipe(
        take(10),
        map(num =>
            interval(300).pipe(
                take(4),
                map(x => num * x)
            )
        ),
        mergeAll(),
    )
    .subscribe(x => console.log(x));

