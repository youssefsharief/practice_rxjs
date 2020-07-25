/* 

operator: just wanna know how many values are in this stream. returns one value. takes an optional predicate 

*/

import { from } from "rxjs";
import {count}  from 'rxjs/operators';

from([1,2,3,4,4,4,4,5]).pipe(
    count(x => x>3)
).subscribe(result =>console.log(result));