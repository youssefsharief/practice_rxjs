/* 
any value emitted from any of the obsrevables is immediately emitted to the result. Both obsrvables are masters here. You can determine if one of the inner observables will
not emit until the others have finished with the concurrent variable. But when this last observable starts emitting the values reach immediately. It is better to have all of them emit at the same 
the same type since they would be in the stream at the end (not like combining)

*/

import { merge, interval } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';
 
const timer1 = interval(1000).pipe(take(10), mapTo('first timer'));
const timer2 = interval(2000).pipe(take(6), mapTo('second timer'));
const timer3 = interval(500).pipe(take(10), mapTo('third timer'));

merge(timer1, timer2, timer3,2).subscribe(x => console.log(x));
