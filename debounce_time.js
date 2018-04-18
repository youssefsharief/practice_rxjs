const Rx = require('rxjs')

//emit value every 1 second
const source = Rx.Observable.interval(200).take(6);
//incrementally increase the time to resolve based on source
const promise = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(`New data`), 100)
  );
//when promise resolves emit item from source
source.debounceTime(1000)
  .map(val => `Throttled off Promise: ${val}`).subscribe(val => console.log(val));