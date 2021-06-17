import {Observable,} from 'rxjs';

const observable = new Observable(subscriber=>{
  subscriber.next('Hello');
});

