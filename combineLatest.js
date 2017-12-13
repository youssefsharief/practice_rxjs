const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of([{id: 1},{id: 1}, {id: 1}, {id: 1}]);
const getPostTwo$ = Observable.throw('This is an error message'); 
const getPostThree$ = Observable.of([{id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]);


let arr= []

Observable.combineLatest(getPostOne$, getPostThree$, getPostTwo$).subscribe(data =>  console.log(data), error=> console.log(('eeee')));
// Will terminate everything when finding an error
