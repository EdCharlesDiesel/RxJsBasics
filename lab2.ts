
import { fromEvent, interval, of } from 'rxjs';
import { filter, map, mapTo, scan, takeUntil, tap } from 'rxjs/operators';
import './style.css';
console.clear();


//element ref

const message = document.getElementById('message');
const countdown = document.getElementById('countdown');
const abort = document.getElementById('abort');
//streams
const abortClicks$ = fromEvent(abort, 'click');
const counter$ = interval(1000);

counter$.pipe(
    mapTo(-1),
    scan((accumulator, cur) => {
        return accumulator + cur;
    }, 10),
    // tap(console.log),
    takeUntil(abortClicks$))

    //filter(value => value >= 0))
    .subscribe(value => {
        countdown.innerHTML = value.toString();
        if (!value) {
            message.innerHTML = 'Lift off';
        }
    });


// ==================================================
// The Tab Operator
const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(
    tap(value => console.log('before', value)),
    map(value => value * 10),
    tap({
        next: value => console.log('after', value),
        complete: () => console.log('done!'),
        error: error => console.log('do something if there is an error')
    })
).subscribe((value: number) => {
    console.log('from subscriber', value)
});