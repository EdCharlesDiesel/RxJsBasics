import { fromEvent, interval } from 'rxjs';
import { map, sample, sampleTime } from 'rxjs/operators';
import './style.css'
console.clear;

const click$ = fromEvent(document, 'click');
const timer$ = interval(1000);

// click$.pipe(
// sampleTime(4000),
// map(({clientX, clientY})=>({
//      clientX,clientY
// }))
// ).subscribe(console.log);
timer$.pipe(
    sample(click$)
).subscribe(console.log);