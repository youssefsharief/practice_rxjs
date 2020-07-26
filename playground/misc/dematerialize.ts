import { of, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

const notifA = new Notification('N', 'A');
const notifB = new Notification('N', 'B');
const notifE = new Notification('E', undefined,
    new TypeError('x.toUpperCase is not a function')
);

of(notifA, notifB, notifE)
    .pipe(
        dematerialize()
    ).subscribe(x => console.log(x), e => console.error(e));
