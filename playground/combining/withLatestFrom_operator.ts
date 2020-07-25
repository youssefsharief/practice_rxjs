/* 
    The source: "Hey anything I emit should get emitted instantly, just get me the latest from that slave inner observable". In the example below, the source 
    observable which is the buttonclicked event gets emitted immediately and with it it takes the latest value from the slave interval (inner observable)
*/

import { interval, fromEvent } from "rxjs";
import {clickButtonLikeAKid, emitter} from "../utility/mockClicks"
import { withLatestFrom, tap } from "rxjs/operators";

fromEvent(emitter, 'buttonClicked').pipe(
    tap(() => console.log('user clicked')),
    withLatestFrom(interval(50))
).subscribe((x) => console.log(x))
clickButtonLikeAKid()