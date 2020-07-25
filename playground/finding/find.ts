/* 
    operator: like first with predicate
*/

import { from } from "rxjs";
import { find } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(find(x => x>6)).subscribe(x => console.log(x));