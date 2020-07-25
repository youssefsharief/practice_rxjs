/* 

operator: return me only on value of

*/

import { from } from "rxjs";
import {reduce}  from 'rxjs/operators';

from([1,2,3,4,4,4,4,5]).pipe(
    reduce((accumulator, one) => accumulator + one)
).subscribe(result =>console.log(result));