import { map, debounce, debounceTime, mergeAll, mergeMap, takeUntil } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import './style.css';


const clicks$ = fromEvent(document, 'click');
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');

const intervals$ = interval(1000);

const coordinates$ = clicks$.pipe(
    map((event: any) => ({
        x: event.clientX,
        y: event.clientY
    }))
)

const coordinatesWithSave$ = coordinates$.pipe(
    mergeMap(coord => ajax.post(`https//github.com`, coord)),
);

coordinatesWithSave$.subscribe(console.log);
// clicks$.pipe(
//     mergeMap(
//         () => intervals$
//     )
// ).subscribe(console.log);


// mouseDown$.pipe(
//     mergeMap(
//         () => intervals$.pipe(
//             takeUntil(mouseUp$)
//         )
//     )
// ).subscribe(console.log);


