import './style.css';
console.clear();

import { fromEvent, Observable, of, range, from, interval } from 'rxjs';


function hello(){
    return 'Hello World';
}
const observer = {
    next:value => console.log('next',value),
    error:error => console.log('error',error),
    complete:() => console.log('complete'),
};

const source$ = fromEvent(document, 'keyup');

const sourceOf$ = of(1,2,3,4,5);

const sourceRange$ = range(1,5);

const sourceArray$ = from([1,2,3,4,5]);

const sourceArrayOfString$ = from('khotso');

const timer$ = interval(1000);

// source$.subscribe(observer);
// sourceOf$.subscribe(observer);
// sourceArrayOfString$.subscribe(observer);
// console.log(hello());

timer$.subscribe(console.log);
