
import { fromEvent, interval } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, pluck} from 'rxjs/operators';
import '/style.css';

//element reference
const inputBox = document.getElementById('text-input');

//streams
const clicks$ = fromEvent(document, 'click');
const input$ = fromEvent(document, 'keyup');

clicks$.pipe(
    debounceTime(1000)
).
subscribe(console.log);

input$.pipe(
    //debounceTime(1000),
    debounce(()=>interval(1000)),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);