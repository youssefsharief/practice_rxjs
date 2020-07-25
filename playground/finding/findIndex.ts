import { from } from "rxjs";
import { findIndex } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(findIndex(x => x>6)).subscribe(x => console.log(x));