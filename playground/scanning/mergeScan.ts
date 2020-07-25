


import { from , interval} from "rxjs";
import { mergeScan, scan } from "rxjs/operators";

// interval(1000).pipe(
//     mergeScan((acc, value) => from([acc + value]) , 0)
// ).subscribe(x => console.log(x))


interval(1000).pipe(
    scan((acc, value) => acc + value , 0)
).subscribe(x => console.log(x))