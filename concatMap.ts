
import { fromEvent, interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, distinctUntilChanged, pluck, switchMap, concatMap, take, delay } from 'rxjs/operators';

import '/style.css';


//streams
const clicks$ = fromEvent(document, 'click');
const interval$ = interval(1000);

clicks$.pipe(
    concatMap(()=>interval$.pipe(take(3)))
)
//.subscribe(console.log);

const saveAnswer = answer => {
    return of(`saved: ${answer}`).pipe(
        delay(1500)
    );
};

// ref elements
const radioButtons = document.querySelectorAll('.radio-option');

const answerChange$ = fromEvent(radioButtons, 'click');

answerChange$.pipe(
    concatMap( (event: any) => saveAnswer(
        event.target.value
    ))
).subscribe(console.log)