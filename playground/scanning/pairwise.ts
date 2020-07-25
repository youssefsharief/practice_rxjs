/* 

operator: Athough I work with one stream, but I am gonna combine them and send back in pairs. I know that's a bit weird.

*/

import { pairwise } from "rxjs/operators";
import { from } from "rxjs";

from([1,2,3,4,5,6,7]).pipe(pairwise()).subscribe(x => console.log(x))