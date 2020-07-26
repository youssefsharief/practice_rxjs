/* operaotor: if no value emits in this given time, throw an error. If only one value gets emitted before that time, then I won't do anything */

import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';



interval(1000).pipe(
    timeout(900)
).subscribe(
    value => console.log(value),
    err => console.log(err),
);