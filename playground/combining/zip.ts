/* 
Just zip values. It respects order like an array. If one of the observables are not emitting, it stops completely unlike combineLatest.
*/

import { from, zip, of } from 'rxjs'
import { map } from 'rxjs/operators';

const weights$ = from([90, 88, 85, 82, 80, 79, 75, 70, 80, 89])
const heights$ = from([1.68, 1.7, 1.75])

zip(weights$, heights$).subscribe(x => console.log(x))

let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);
 
zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));
