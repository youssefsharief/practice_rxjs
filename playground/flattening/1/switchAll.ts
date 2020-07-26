/* remember concatAll respected the first inner observable so much that no other observable are allowed to emit unless the unless the one
before it is done. SwitchAll is the opposite, it forgest about the previous observable once a newer observable starts emitting. like a kid that forgets about his old inner
toy when he sees a new toy.
*/
import { interval } from 'rxjs';
import { take, switchAll, map } from 'rxjs/operators';


interval(700)
    .pipe(
        map((x, i) => i+1),
        take(10),
        map(obsNumber =>
            interval(300).pipe(
                map((x, i)=> `${obsNumber}   ${i+1}`),
                take(4),
            )
        ),
        switchAll(),
    )
    .subscribe(x => console.log(x));

