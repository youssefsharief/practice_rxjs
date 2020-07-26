/* operator: I am expecting only one value. If I found more I am not gonna take the first value and I am also gonna throw an error
*/

import { range, from } from 'rxjs';
import { single } from 'rxjs/operators';

from([1, 5]).pipe(
    single()
).subscribe(x => console.log(x), e => console.log('error'));