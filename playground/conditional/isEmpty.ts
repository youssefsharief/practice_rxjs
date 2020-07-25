import { from } from "rxjs";
import { isEmpty } from "rxjs/operators";


from([1,2,3,4,8,3,4,5, 9]).pipe(isEmpty()).subscribe(x => console.log(x));
from([]).pipe(isEmpty()).subscribe(x => console.log(x));