/* very simple. just perform a function when all values are emitted. */

import { interval } from "rxjs";
import { take, finalize } from "rxjs/operators";

interval(300).pipe(
    take(4),
    finalize(()=> console.log("done"))    
).subscribe((x) => console.log(x))