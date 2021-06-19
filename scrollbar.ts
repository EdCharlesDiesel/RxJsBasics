import { asyncScheduler, fromEvent } from "rxjs";
import { map, tap, throttleTime } from "rxjs/operators";
import './style.css';
console.clear();
//helpers for
function calculateScrollPercent(element) {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = element;

    return (scrollTop / (scrollHeight - clientHeight) * 100);
}

const scroll$ = fromEvent(document, 'scroll');

const progressBar = document.querySelector<HTMLElement>(
    'progress-bar'
);

const progress$ = scroll$.pipe(
    throttleTime(30, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    map(({ target }: any) => calculateScrollPercent(
        target.documentElement
    )),
    tap(console.log)
);

progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`
});