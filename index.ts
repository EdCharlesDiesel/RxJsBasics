import './style.css';
console.clear();

import { fromEvent, Observable, of, range, from, interval } from 'rxjs';
import { filter, map, reduce, scan, take } from 'rxjs/operators';


// of(1,2,3,4,5,6).pipe(
//     filter(value => value>=2)
// ).subscribe(console.log);

// const keyUp$ = fromEvent(document, 'keyup');
// const keyCode$ = keyUp$.pipe(
//     map((event:any) => event.code)
// );

// const enter$ = keyCode$.pipe(
//     filter(code => code === 'Enter')
// );

// enter$.subscribe(console.log);

// ======================================================-->
// Progress bar
// function calculateScrollPercent(element) {
//   const { scrollTop, scrollHeight, clientHeight } = element;

//   return (scrollTop / (scrollHeight - clientHeight)) * 100;
// }

// // elems
// const progressBar: any = document.querySelector('.progress-bar');

// // streams
// const scroll$ = fromEvent(document, 'scroll');

// const progress$ = scroll$.pipe(
//   /*
//    * For every scroll event, we use our helper function to
//    * map to a current scroll progress value.
//    */
//   map(({ target }: any) => calculateScrollPercent(target.scrollingElement))
// );
// /*
//  * We can then take the emitted percent and set the width
//  * on our progress bar.
//  */
// progress$.subscribe(percent => {
//   progressBar.style.width = `${percent}%`;
// });

//===================================================
//Reducer

const numbers = [1, 2, 3, 4, 5]
const user =[
  {name: 'Khotso',	loggedIn: false}, {token: null},
  {name: 'Kagiso',	loggedIn: false}, {token: 'hnn'},
  {name: 'Nale',	loggedIn: true}, {token: 'kajj'},
]

// const state$ = from(user).pipe(
//   scan((accumulator, cur) => {
//     return{ ...accumulator,...cur;};
//   }, {})
// ).subscribe(console.log)

const state$ = from(user).pipe(
  scan((accumulator, cur) => {
    return{ ...accumulator,...cur};
  }, {})
)


// const name$ = state$.pipe(
//   map(state=>state.name)
// );


//name$.subscribe(console.log);

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
