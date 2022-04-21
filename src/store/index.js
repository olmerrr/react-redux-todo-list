import { throttle } from "lodash";
import { createStore } from "redux";
import {loadState, saveState} from './local-storage'
import {rootReducer} from './root-reducer';


export const cofigureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    store.subscribe(throttle(() => {
      saveState(store.getState({
        todos: store.getState().todos
      }))
    },1000))
  return store;
}