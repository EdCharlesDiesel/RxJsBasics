import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import './style.css';
console.clear;

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    auditTime(3000)
).
subscribe(console.log);