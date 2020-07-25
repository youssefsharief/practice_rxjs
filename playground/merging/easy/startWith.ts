// so easy. just start with some given values right away. it ignores delay if it came after the delay in the pipe.

import { from } from "rxjs";
import { delay, startWith } from "rxjs/operators";

from([1,2,3]).pipe(
    delay(3000),
    startWith(6,7),
).subscribe(x => console.log(x))