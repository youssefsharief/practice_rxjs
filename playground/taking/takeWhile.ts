/* 
    operator: if I see only one value I do not like, I will end this thing completely.

    This is not filtering. The whole thing ends when only one value does not satisfy conditions
*/

import { from } from "rxjs";
import { takeWhile } from "rxjs/operators";


from([1,2,3,4,8,3,4,5]).pipe(takeWhile(x => x<8)).subscribe(x => console.log(x));