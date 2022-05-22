Redux
=====

[DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

## Restore State at Startup

```js
// Reducer:
const INITIAL_STATE = JSON.parse(localStorage.getItem('appState'));

// app.component:
@HostListener('window:beforeunload', ['$event'])
unloadHandler(event: Event): void {
  localStorage.setItem('appState', JSON.stringify(this.appState$.getValue()));
}
```


### Meta-Reducer

```js
import merge from 'lodash.merge';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { reducers } from './reducers';

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  return function(state: S, action: A): S {
    const nextState = reducer(state, action);
    const savedState = JSON.parse(localStorage.getItem('appState')) || {};
    merge(nextState, savedState);
    localStorage.setItem('appState', nextState);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers })
  ],
})
```
