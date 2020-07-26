/* operator: emit this value if you did not have any */

import { of, fromEvent, interval } from "rxjs";
import { defaultIfEmpty, takeUntil } from "rxjs/operators";
import { clickButtonLikeAKid, emitter} from '../../utility/mockClicks';

fromEvent(emitter, 'buttonClicked').pipe(
    takeUntil(interval(1000)),
    defaultIfEmpty('aaa')
).subscribe(x => console.log(x))

// clickButtonLikeAKid()