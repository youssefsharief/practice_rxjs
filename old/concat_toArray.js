const Observable = require('rxjs').Observable

// Simulate HTTP requests 
const getPostOne$ = Observable.of({items:[{name: 'AB'},{name: 'CD'}, {name: 'UI'}, {name: 'P'}]});
const getPostTwo$ = Observable.throw('This is an error message'); 
const getPostThree$ = Observable.of({items:[{name: 'A'},{name: 'E'}, {name: 'M'}, {name: 'L'}]});


let arr= []

Observable.concat(getPostOne$, getPostThree$, getPostTwo$).catch(err=>console.log(err))
.map(x=>x.items).subscribe(data =>  console.log(data), error=> console.log(('eeee')));
// Will proceed even after findinf an error


