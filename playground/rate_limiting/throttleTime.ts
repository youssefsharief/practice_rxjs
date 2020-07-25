/* 
if no values have been emitted for a long period of time, the first emitted value would go to the result.
This can be used if you want to limit the click rate to be at max once per second. at the same time when someonee click without spamming, he won't wait.
even if the user is spamming, he won't wait alot since throttleTime is starting the timer from the last successfully registered rather than the last spam click
*/

import { clickButtonLikeAKid, emitter } from '../utility/mockClicks'
import { fromEvent } from 'rxjs'
import {throttleTime, tap } from 'rxjs/operators'

fromEvent(emitter, 'buttonClicked').pipe(
    tap(()=> console.log('user clicked')),
    throttleTime(1000)
).subscribe(x => console.log('click registerd in throttleTime'))
clickButtonLikeAKid()