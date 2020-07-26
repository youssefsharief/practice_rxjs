/* returns only distinct elements. It accepts a function that lets you tell it how to determine whether something is extinct or not.
*/
import { from } from "rxjs";
import { distinct } from "rxjs/operators";

from([1,2,4,2,3,4,2]).pipe(
    distinct()
).subscribe(x => console.log(x))