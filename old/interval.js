const Observable = require('rxjs').Observable

Observable
    .interval(100)
    .timeInterval()
    .flatMap(() => Observable.of([]))
    .subscribe(data => {
        console.log(data);
    });
