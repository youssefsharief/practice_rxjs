import { interval, from } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

from([2000, 3000, 4000, 5000, 6000])
    .pipe(
        delayWhen((value) => interval(value)),
    )
    .subscribe(x => console.log(x));
