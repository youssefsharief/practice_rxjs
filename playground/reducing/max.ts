/* takes comparer function
*/

import { from } from "rxjs";
import {max}  from 'rxjs/operators';


const order = ['mahmoud', 'youssef', 'omar']


from(['youssef', 'omar', 'mahmoud']).pipe(
    max( (a, b) => order.indexOf(a)  < order.indexOf(b) ? 1 : -1)
).subscribe(result =>console.log(result));

