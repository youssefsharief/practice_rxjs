/* 
    operator: if I see the inner observable emit only one value, I am gonnna keep taking everything afterwards.

*/

import { fromEvent, interval } from "rxjs";
import { skipUntil } from "rxjs/operators";
import { emitter, emitAfter } from "../utility/emitAfter";

interval(300).pipe(skipUntil(fromEvent(emitter, 'buttonClicked'))).subscribe(x => console.log(x));

emitAfter(2000)