import { MonoTypeOperatorFunction, merge, of } from "rxjs";
import { filter, delay } from "rxjs/operators";



function twoThrottlessBasedOnCondition<T>(urgentTime: number, regularTime: number, urgentCondition: (x: T) => boolean): MonoTypeOperatorFunction<T> {
    return (source) => {
        const urgent$ = source.pipe(
            filter(x => urgentCondition(x)),
            delay(urgentTime)
        )
        const regular$ = source.pipe(
            filter(x => !urgentCondition(x)),
            delay(regularTime)
        )
        return merge(
            urgent$, regular$
        )
    }
}

of('jhlkdas', 'asjk', 'asd', '911hjdlka', '342', '2354').pipe(
    twoThrottlessBasedOnCondition(20, 3000, (s: string)=> s.startsWith('911'))
).subscribe(
    x => console.log(x)
)

