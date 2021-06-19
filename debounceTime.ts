
import { empty, fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, debounceTime, distinctUntilChanged, pluck, switchMap, catchError } from 'rxjs/operators';

import '/style.css';

const Base_URL = 'https://api.openbrewerydb.org/breweries';
//element reference
const inputBox = document.getElementById('text-input');
const typeheadContainer = document.getElementById('typeheadcontainer');
//streams
const clicks$ = fromEvent(document, 'click');
const input$ = fromEvent(inputBox, 'keyup');

clicks$.pipe(
    debounceTime(1000)
)
// .subscribe(console.log);

input$.pipe(
    //debounceTime(1000),
    // debounce(()=>interval(1000)),
    pluck('target', 'value'),
    distinctUntilChanged(),
    switchMap(serchTerm => {
        return ajax.getJSON(
            `${Base_URL}?by_name=${serchTerm}`
        ).pipe(
            catchError((error,caught) => {
                return caught
            })
        )
    })
).subscribe((resp: any) => {
    typeheadContainer.innerHTML = resp.map(
        b => b.name
    ).join('<br>')
}
);