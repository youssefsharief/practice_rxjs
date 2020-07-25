/* 

operator: Its fine if one observable is a late. But they should have exactly the same elements in order to

*/

import { from } from "rxjs";
import { sequenceEqual, delay } from "rxjs/operators";

from([1, 2, 3, 4, 8, 3, 4, 5, 9]).pipe(
    sequenceEqual(
        from([1, 2, 3, 4, 8, 3, 4, 5, 9]).pipe(delay(100))
    )
).subscribe(x => console.log(x));
