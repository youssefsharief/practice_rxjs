import { from } from "rxjs";
import { elementAt } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(elementAt(4)).subscribe(x => console.log(x));