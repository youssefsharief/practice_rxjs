import { fromEventPattern, OperatorFunction, Observable } from 'rxjs';
import { emitter, clickButtonLikeAKid } from '../../utility/mockClicks';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';


function addClickHandler(handler) {
    emitter.addListener('buttonClicked', handler);
}

function removeClickHandler(handler) {
    emitter.removeListener('buttonClicked', handler);
}

const clicks = fromEventPattern(
    addClickHandler,
    removeClickHandler
);