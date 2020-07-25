const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of({items:[{name: 'CD'},{name: 'Z'}, {name: 'UI'}, {name: 'P'}]}).map(x=>x.items)
const getPostTwo$ = Observable.throw('This is an error message').map(x=>x.items)
const getPostThree$ = Observable.of({items:[{name: 'A'},{name: 'E'}, {name: 'M'}, {name: 'L'}]}).map(x=>x.items)

let sources = [getPostOne$, getPostTwo$, getPostThree$].map(obs => 
    obs.catch(() => Observable.empty())
  );


let items = []


Observable.merge(...sources).concatAll().toArray().subscribe(arr =>  items = arr.sort( (a, b) => a.name.localeCompare(b.name)));
console.log(items)
