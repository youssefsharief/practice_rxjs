/* 

accumulator function; like reduce
source: once I emit something, i want to see an aggreagta immediately

*/

import { from } from "rxjs";
import {scan}  from 'rxjs/operators';

from([1,2,3]).pipe(
    scan((accumulator, one) => accumulator + one)
).subscribe(result =>console.log(result));