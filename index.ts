import './style.css';
console.clear();

import { Observable } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

const observable = new Observable(subscriber => {
    // subscriber.next('Hello');
    // subscriber.next('World');
    // //subscriber.complete();

    // subscriber.next('Hello I said');
    // subscriber.error('There is an error');
    // subscriber.next('World');

    let count= 0;
    const id = setInterval(() => {
        subscriber.next(count);
        //subscriber.complete();
        count += 1;
    }, 1000);

    return ()=>{
        console.log('called');
        clearInterval(id);
    }
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

setInterval(() =>{
    subscription.unsubscribe();
},3500);