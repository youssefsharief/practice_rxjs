import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';
 
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
).subscribe(word => console.log(word));
