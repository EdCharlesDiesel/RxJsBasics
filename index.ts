import './style.css';
console.clear();

import { fromEvent, Observable, of, range, from, interval } from 'rxjs';
import { filter, map, reduce, scan,debounce, take,distinctUntilChanged, distinctUntilKeyChanged, debounceTime, pluck } from 'rxjs/operators';

//ref elements
const inputBox = document.getElementById('text-input');

//streams

const click$ = fromEvent(document, 'click');
const inputs$ = fromEvent(document, 'Keyup');

inputs$.pipe(
  debounce(()=>interval(1000)),
  pluck('target','value'),
  distinctUntilChanged(),
).subscribe(console.log)

click$.pipe(debounceTime(1000)).subscribe(console.log);