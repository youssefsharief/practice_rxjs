/* 
    as if someone is fasting fasting fasting all day, then when the fast ends he eats whatever he see 


    operator: Whenever I see a value I like, I will take at along with everything afterwards
*/

import { from } from "rxjs";
import { skipWhile } from "rxjs/operators";


from([1,2,3,4,8,3,4,5]).pipe(skipWhile(x => x<8)).subscribe(x => console.log(x));