/* check switchAll
*/
import { interval } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';


interval(700)
    .pipe(
        map((x, i) => i+1),
        take(10),
        switchMap(obsNumber =>
            interval(300).pipe(
                map((x, i)=> `${obsNumber}   ${i+1}`),
                take(4),
            )
        ),
    )
    .subscribe(x => console.log(x));

