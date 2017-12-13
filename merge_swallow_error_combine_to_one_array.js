const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of({items:[{name: 'AB'},{name: 'CD'}, {name: 'UI'}, {name: 'P'}]})
const getPostTwo$ = Observable.throw('This is an error message')
const getPostThree$ = Observable.of({items:[{name: 'A'},{name: 'E'}, {name: 'M'}, {name: 'L'}]})

let sources = [getPostOne$, getPostTwo$, getPostThree$].map(obs => 
    obs.catch(() => Observable.empty())
  );



Observable.merge(...sources).map(x=>x.items).concatAll().toArray().subscribe(data =>  console.log(data));
// Merge usually only get data till the first error message appears but if we added onErrorResumeNext, it continues. Parallel.  
