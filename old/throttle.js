const Rx = require('rxjs')

//emit value every 1 second
const source = Rx.Observable.interval(100);
//incrementally increase the time to resolve based on source
const promise = val =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Resolved: ${val}`), 1000)
  );
//when promise resolves emit item from source
source.throttle(promise)
  .map(val => `Throttled off Promise: ${val}`).subscribe(val => console.log(val));