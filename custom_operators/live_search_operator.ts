import { ObservableInput, OperatorFunction, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

type FunctionThatReturnsAnObservable<T> = (q: string) => Observable<T>

function liveSearch<T>(time: number, fn: FunctionThatReturnsAnObservable<T>): OperatorFunction<string, T> {
    return (source) => source.pipe(
        debounceTime(time),
        distinctUntilChanged(),
        switchMap(fn)
    )
}

