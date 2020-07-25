import { of, OperatorFunction, Observable, interval, from, timer } from 'rxjs';
import { take, mergeAll, map } from 'rxjs/operators';

// interval(400).
//     pipe(take(4),
//         map(num => interval(1000))
//     ).pipe(
//         mergeAll()
//     )
//     .subscribe(x => console.log(x));

    from([1,2,3,4,4,4,5,65,4]).pipe(
        map(x => timer(x * 1000)),
        mergeAll()
    )