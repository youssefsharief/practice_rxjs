const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of([{id: 1},{id: 1}, {id: 1}, {id: 1}]);
// const getPostTwo$ = Observable.throw('This is an error message'); 
const getPostThree$ = Observable.of([{id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]);


let arr= []



Observable.merge(getPostOne$, getPostThree$).toArray().subscribe(data =>  console.log(data));
// Will only get data till the first error message appears. Parallel

