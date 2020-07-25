import { range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

range(1, 100).pipe(takeLast(3)).subscribe(x => console.log(x));
