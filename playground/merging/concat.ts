/* 
like merge, the emittance of an inner observable is shown immediately. BUT the second observable do not emit until the first is done

*/

import { concat, interval } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';
 
const timer1 = interval(1000).pipe(take(10), mapTo('first timer'));
const timer2 = interval(2000).pipe(take(6), mapTo('second timer'));
const timer3 = interval(500).pipe(take(10), mapTo('third timer'));

concat(timer1, timer2, timer3).subscribe(x => console.log(x));
