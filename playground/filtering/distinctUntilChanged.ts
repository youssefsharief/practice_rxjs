/* does not return if the element is the same
*/
import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

from([1,2,4,2,2,2,2,3,4,2]).pipe(
    distinctUntilChanged()
).subscribe(x => console.log(x))