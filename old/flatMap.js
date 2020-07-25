const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of([{id: 1},{id: 1}, {id: 1}, {id: 1}])
const getPostTwo$ = Observable.throw('This is an error message')
const getPostThree$ = Observable.of([{id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}])


Observable.concat(getPostOne$, getPostThree$, getPostTwo$)
.flatMap(array => console.log(array) )
// .groupBy(x => x.id )
.subscribe(x =>
  x.map((x,i) => subscribe(x))
)