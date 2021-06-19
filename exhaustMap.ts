import { ajax } from 'rxjs/ajax';

import { fromEvent, interval } from 'rxjs';
import { debounceTime, concatMap, take, exhaustMap } from 'rxjs/operators';
import '/style.css';

//element reference
const login = document.getElementById('login');

//streams
const interval$ = interval(1000);
const clicks$ = fromEvent(document, 'click');
const login$ = fromEvent(login, 'click');


clicks$.pipe(
    exhaustMap(() => interval$.pipe(take(3)))
)
//.subscribe(console.log);

const authenticateUser = () => {
    return ajax.post(
        'https//reqres.in/api/login', {
        email: `fish@godeep.com`,
        password: `cityplace`
    }
    )
};

login$.pipe(
    exhaustMap(() => authenticateUser())
).subscribe(console.log)