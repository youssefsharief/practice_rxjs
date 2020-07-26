/* operator: throw this error if you did not have any */

import { fromEvent, interval } from "rxjs";
import { throwIfEmpty, takeUntil } from "rxjs/operators";
import { clickButtonLikeAKid, emitter} from '../../utility/mockClicks';

fromEvent(emitter, 'buttonClicked').pipe(
    takeUntil(interval(1000)),
    throwIfEmpty(()=> new Error('we waited for you but you have not clicked'))
).subscribe(x => console.log(x))

// clickButtonLikeAKid()