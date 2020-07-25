/*
 operator: this stream has both male and females. Seperate them

*/

import { partition, from } from 'rxjs';

const [odd$, even$] = partition(from([1,2,3,4,5,6,7,8]), (x:number) => x %2!=0)


odd$.subscribe(y => console.log(y , '  is odd'))
even$.subscribe(y => console.log(y , '  is even'))

