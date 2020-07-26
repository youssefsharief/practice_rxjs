/* keeps repeating the observable agian after it finishes. It is like retry but retry handles errors while this one handles when the observable end */


import { from } from "rxjs";
import { repeat } from "rxjs/operators";

from([1,2,3]).pipe(
    repeat(2)
).subscribe({
    next: x => console.log(x),
    error: err => console.log(err.message)
})


