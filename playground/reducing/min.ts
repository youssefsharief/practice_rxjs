/* takes comparer function
*/

import { from } from "rxjs";
import {min}  from 'rxjs/operators';


const order = ['mahmoud', 'youssef', 'omar']


from(['youssef', 'omar', 'mahmoud']).pipe(
    min( (a, b) => order.indexOf(a)  < order.indexOf(b) ? 1 : -1)
).subscribe(result =>console.log(result));

