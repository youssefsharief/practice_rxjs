/*
    Pick the last {{n}}. It does not work with intervals because intervals does not end by default. It is like take but the opposite
*/


import { range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

range(1, 100).pipe(takeLast(3)).subscribe(x => console.log(x));
