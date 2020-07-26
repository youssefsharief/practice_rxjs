/* source to operator: please help me wrap these values. I know some of them might be problematic */

import { of } from 'rxjs';
import { materialize, map } from 'rxjs/operators';

of('a', 'b', 13, 'd').pipe(
    map((x: any) => x.toUpperCase()),
    materialize()
).subscribe(x => console.log(x));