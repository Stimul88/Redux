// import { configureStore } from '@reduxjs/toolkit';
import newReducer from "../reducers/newReducer";
import listReducer from "../reducers/listReducer";
import {combineReducers, compose, legacy_createStore} from "redux";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.
  __REDUX_DEVTOOLS_EXTENSION__();


function configureStore() {
  return legacy_createStore(
    combineReducers({
      form: newReducer,
      list: listReducer,
    }),
    compose(
      ReactReduxDevTools
    )
  )
}

export default configureStore

// export const store = configureStore() {
//   return legacy_createStore(
//     combineReducers({
//       form: newReducer,
//       list: listReducer,
//     })
//   )
// };

// reducer: {
//   form: newReducer,
//     list: listReducer,
// },