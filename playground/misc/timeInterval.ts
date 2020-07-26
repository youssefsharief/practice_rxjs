/* 
    operator: I want to know how much time passed between each emitted value in the stream
*/

import { clickButtonLikeAKid, emitter } from "../../utility/mockClicks";
import { fromEvent } from "rxjs";
import { timeInterval } from "rxjs/operators";


fromEvent(emitter, 'buttonClicked').pipe(
    timeInterval()
).subscribe(event => console.log(event))
clickButtonLikeAKid()