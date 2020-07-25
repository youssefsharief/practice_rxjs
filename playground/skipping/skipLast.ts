import { from } from "rxjs";
import { skipLast } from "rxjs/operators";


from([1,2,3,4,8,3,4,5]).pipe(skipLast(3)).subscribe(x => console.log(x));