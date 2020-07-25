/* 
    operator: I am gonna take the last value that meets my expectations.
*/

import { from } from "rxjs";
import { last } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9, 4, 5, 6]).pipe(last(x => x>6)).subscribe(x => console.log(x));