
import { map, debounce, debounceTime, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import './style.css';



// streams
const intervals$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    switchMap(
        () => intervals$
    )
).subscribe(console.log);