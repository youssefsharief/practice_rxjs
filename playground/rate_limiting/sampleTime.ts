/*
Fixed time window to emit. it won't emit if the last emitted value has not been updated.
*/

import { clickButtonLikeAKid, emitter } from '../utility/mockClicks'
import { fromEvent } from 'rxjs'
import {sampleTime, tap, throttleTime } from 'rxjs/operators'

fromEvent(emitter, 'buttonClicked').pipe(
    tap(()=> console.log('user clicked')),
    sampleTime(1000)
).subscribe(x => console.log('click registerd in sample time'))


fromEvent(emitter, 'buttonClicked').pipe(
    // tap(()=> console.log('user clicked')),
    throttleTime(1000)
).subscribe(x => console.log('click registerd in throttleTime'))


clickButtonLikeAKid()