import { map, debounce, debounceTime, mergeAll, mergeMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import './style.css';

// ref element

const textInput = document.getElementById('text-input');

// streams
const input$ = fromEvent(textInput, 'keyup');

input$.pipe(
    debounceTime(200),
    mergeMap((event: any) => {
        const term = event.target.value;

        return ajax.getJSON(`https://api.github.com/users/${term}`)
    }),
    //mergeAll()
).subscribe(console.log);