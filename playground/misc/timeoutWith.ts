/* operaotor: if no value emits in this given time, use this inner observable instead */

import { interval } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';



interval(1000).pipe(
    timeoutWith(900, interval(1100))
).subscribe(
    value => console.log(value),
    err => console.log(err),
);