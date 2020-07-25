/* like partition but here the partitioning is not based on a predicate. Instead it is based on the count of emitted values
*/

/* 

like bufferCount but returns an observable of observables therefore you need to fltten them after doing the operations you need 


*/


import { from } from "rxjs";
import { windowCount, mergeAll, map, skip } from "rxjs/operators";


from([1,2,3, 4,8,3,4,5, 9]).pipe(
    windowCount(3),
    map(win => win.pipe(skip(1))),
    mergeAll(),
).subscribe(x => {
    console.log(x)
})