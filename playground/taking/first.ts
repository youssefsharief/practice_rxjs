/* 
    operator: I am gonna take the first value or maybe the first value that meets my expectations, then I am gonna end this thing.
    Like marriage for ladies. she picks the first guy she likes then she ends this thing insha Allah.
*/

import { from } from "rxjs";
import { first } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(first(x => x>6)).subscribe(x => console.log(x));