import { interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

// a bit complicated because this is an observable of observables
interval(3000)
    .pipe(
        map(num =>
            interval(50).pipe(take(4))
        ),
        concatAll(),
        take(10)
    )
    .subscribe(x => console.log(x));