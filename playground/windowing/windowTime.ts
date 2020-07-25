/*

operator: get me emitted values for each 3 seconds and then sum them together after removing the first and last event. 

*/

import { interval } from "rxjs";
import { windowCount, windowTime, scan, map, take, mergeAll } from "rxjs/operators";

interval(1000).pipe(
    windowTime(3000),
    map(win => win.pipe(take(1))),
    mergeAll()
).subscribe((x) =>console.log(x))