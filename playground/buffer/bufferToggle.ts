// a good example https://stackblitz.com/edit/rxjs-buffertoggle-mousemove?file=index.ts&devtoolsheight=50

import { interval } from 'rxjs';
import { bufferToggle, take } from 'rxjs/operators';

interval(1000).pipe(
    bufferToggle(interval(5000), () => interval(10000)),
    take(4)
).subscribe(x => console.log(x));


