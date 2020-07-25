import { fromEvent } from 'rxjs';
import { emitter, clickButtonLikeAKid } from '../../utility/mockClicks';

fromEvent(emitter, 'buttonClicked').subscribe(e => {
    console.log('e', e)
})

clickButtonLikeAKid()