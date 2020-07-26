/* ignore all elements except for errors, "complete", etc */

import { from, throwError, of } from "rxjs";
import { ignoreElements, mergeMap } from "rxjs/operators";

from([1,2,3]).pipe(
    mergeMap(x => x%2 === 0 ? throwError('this is an error'): of(x)),
    ignoreElements()
).subscribe(x => console.log(x), err => console.log(err))