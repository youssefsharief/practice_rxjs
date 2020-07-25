const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of({items:[{name: 'CD'},{name: 'Z'}, {name: 'UI'}, {name: 'P'}]})
const getPostTwo$ = Observable.throw('This is an error message')
const getPostThree$ = Observable.of({items:[{name: 'A'},{name: 'E'}, {name: 'M'}, {name: 'L'}]})

let sources = [getPostOne$, getPostTwo$, getPostThree$]
// Swallow Error
.map(obs =>  obs.catch(() => Observable.empty()))
// Get only items
.map(obs=>obs.map((x)=>x.items))


let items = []


Observable.merge(...sources).concatAll().toArray().subscribe(arr =>  items = arr.sort( (a, b) => a.name.localeCompare(b.name)));
console.log(items)
