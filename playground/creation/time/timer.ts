import {timer} from 'rxjs'
import {take} from 'rxjs/operators'

// like interval but you can let it start later
timer(5000, 1000).pipe(take(5)).subscribe(x => console.log(x));
