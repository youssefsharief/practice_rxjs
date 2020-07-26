/* like distinctUntilChanged but for a key. It can also take a comparer function
*/
import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";


const arr = [{id:1, name: 'Ahmed'},{id:2, name: 'Ahmed'},{id:4, name: 'Ahmed'},{id:'2', name: 'Ahmed'},{id:2, name: 'Ahmed'},{id:2, name: 'Ahmed'},{id:2, name: 'Ahmed'},{id:3, name: 'Ahmed'},{id:4, name: 'Ahmed'}]

from(arr).pipe(
    distinctUntilKeyChanged('id', (str1, str2) =>  Number(str1)  === Number(str2))
).subscribe(x => console.log(x))