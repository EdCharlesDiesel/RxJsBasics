import { finalize, pluck, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { fromEvent, interval, pipe, timer } from 'rxjs';
import { debounceTime, concatMap, take, exhaustMap, mergeMapTo, takeUntil } from 'rxjs/operators';
import '/style.css';

// ref elements

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage = document.getElementById('dog') as HTMLElement;

// streams

const startClick$ = fromEvent(startButton, 'click');
const stopClick$ = fromEvent(stopButton, 'click');

startClick$.pipe(
    exhaustMap(()=>timer(0, 5000).pipe(
        tap(() => pollingStatus.innerHTML = 'Active'),
        switchMapTo(
            ajax.getJSON(
                'https://random.dog/woof.json'
            ).pipe(pluck('url'))
        ),
        takeUntil(stopClick$),
        finalize(() => pollingStatus.innerHTML = 'Stoped')
    ))
)
//.subscribe(url => dogImage.src  = url);