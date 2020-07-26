/*  
    set the scheduler for the stream
*/

import { of, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

of(2000, 3000, 4000, 5000, 6000).subscribe(x => console.log(x))
of(0,6,60,6).pipe(observeOn(asyncScheduler)).subscribe(x => console.log(x))