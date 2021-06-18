import './style.css';
console.clear();

import { fromEvent, Observable, of, range, from, interval } from 'rxjs';
import { filter, map, reduce, scan, take,distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';


of(1, 2, 3, 4, 5, 6).pipe(
  filter(value => value >= 2)
)
  .subscribe(console.log);

const keyUp$ = fromEvent(document, 'keyup');
const keyCode$ = keyUp$.pipe(
  map((event: any) => event.code)
);

const enter$ = keyCode$.pipe(
  filter(code => code === 'Enter')
);

enter$.subscribe(console.log);

// ======================================================-->
// Progress bar
function calculateScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// ref elements
const progressBar: any = document.querySelector('.progress-bar');

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(

  map(({ target }: any) => calculateScrollPercent(target.scrollingElement))
);

progress$.subscribe(percent => {
  progressBar.style.width = `${percent}%`;
});

// const totalReducer = (accumulator, cur) => {
//   console.log(accumulator, cur);
//   return accumulator + cur;
// }

// const total = numbers.reduce(totalReducer, 0);

// from(numbers).pipe(
//   reduce(totalReducer,0)
// ).subscribe(console.log);
// never inter
// interval(1000).pipe(
//   take(3),
//   reduce(totalReducer, 0)
// ).subscribe({
//   next: console.log,
//   complete: () => console.log('complete')
// });

// from(numbers).pipe(
//   reduce(totalReducer, 0)
// ).subscribe(console.log);


// ======================================================-->
// Scan

const user = [
  { name: 'Kagiso', loggedIn: false, token: 'ACB' },
  { name: 'Naledi', loggedIn: true, token: 'ACX' },
  { name: 'Otsile', loggedIn: false, token: null },
]

const states$ = from(user).pipe(
  scan((accumulator, cur) => {
    return { ...accumulator, ...cur };
  }, user)
);

// const name$ = states$.pipe(
//   distinctUntilKeyChanged('name'),
//   map(state => state.name)
// );

// name$.subscribe(console.log)
// name$.subscribe(console.log)


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
