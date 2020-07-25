/* keeps waiting till all values are emmitted then returns an array for all emitted values */

import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
 
const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);
 
example.subscribe(val => console.log(val));