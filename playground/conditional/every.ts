/* operator: Either everyone follows the specs or I am gonna emit false */


import { from } from "rxjs";
import { every } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(every(x => x>6)).subscribe(x => console.log(x));
from([1,2,3,4,8,3,4,5, 9]).pipe(every(x => x>0)).subscribe(x => console.log(x));