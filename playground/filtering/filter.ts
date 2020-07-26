import { from } from "rxjs";
import { filter } from "rxjs/operators";

from([1,2,3]).pipe(
    filter(x => x%2 === 0)
).subscribe(x => console.log(x))