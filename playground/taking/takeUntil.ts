/* 
    operator: if I see the second observable emit only one value, I am gonnna end this thing. بيتلككله

*/

import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { emitter, emitAfter } from "../utility/emitAfter";

interval(300).pipe(takeUntil(fromEvent(emitter, 'buttonClicked'))).subscribe(x => console.log(x));

emitAfter(2000)