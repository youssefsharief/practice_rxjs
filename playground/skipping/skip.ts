/* 
    skip the first {{n}} values
*/

import { from } from "rxjs";
import { skip } from "rxjs/operators";


from([1,2,3,4,8,3,4,5]).pipe(skip(3)).subscribe(x => console.log(x));