const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of([{id: 1},{id: 1}, {id: 1}, {id: 1}]).delay(3000);
const getPostTwo$ = Observable.throw('This is an error message').delay(1000); 
const getPostThree$ = Observable.of([{id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]).delay(2000);

//fd
let arr= []

Observable.concat(getPostOne$, getPostThree$, getPostTwo$).subscribe(data =>  console.log(data), error=> console.log(('eeee')));
// Will proceed even after finding an error BUT it does fire observables in prallell but not display them in parallell
