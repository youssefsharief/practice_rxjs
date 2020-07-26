import { clickButtonLikeAKid, emitter } from "../../utility/mockClicks";
import { fromEvent } from "rxjs";
import { timestamp } from "rxjs/operators";


fromEvent(emitter, 'buttonClicked').pipe(
    timestamp()
).subscribe(event => console.log(event))
clickButtonLikeAKid()