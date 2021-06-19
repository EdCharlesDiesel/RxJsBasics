import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import './style.css';


const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    throttleTime(3000)
).
subscribe(console.log);