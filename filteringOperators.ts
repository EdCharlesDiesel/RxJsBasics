
import { interval, of, fromEvent } from 'rxjs';
import { filter, map, mapTo, scan, tap, take, first, takeWhile, takeUntil } from 'rxjs/operators';
import './style.css';
console.clear();

const numbers$ = of(1, 2, 3, 4, 5);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    map((event: any) => ({
        x: event.clientX,
        y: event.clientY
    })),
    // fiter take(2),
    first(({ y }) => y > 200)
)
// .subscribe({

//     next: console.log,
//     complete: () => console.log('complete!')
// });

numbers$.pipe(
    take(3)
)
// .subscribe({
//     next: console.log,
//     complete: () => console.log('Complete!')
// });

//=====================================================
// TakeWhile

const clicksTakeWhile$ = fromEvent(document, 'click');

clicksTakeWhile$.pipe(
    map((event: any) => ({
        x: event.clientX,
        y: event.clientY
    })),
    takeWhile(({y})=> y <= 200, true)
)
// .subscribe({
//     next: console.log,
//     complete: () => console.log('complete!')
// });

//=====================================================
// TakeUntil

const counter$ = interval(1000);
const buttonClick$ = fromEvent(document, 'click');

counter$.pipe(
    takeUntil(buttonClick$)
).subscribe({
    next:console.log,
    complete:()=> console.log('Complete mouse button was clicked')});