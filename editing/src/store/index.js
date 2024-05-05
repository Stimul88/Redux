import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import newReducer from "../reducers/newReducer";
import { SET_NAME_VALUE, SET_COST_VALUE } from "../actions";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      new: newReducer
    }),
    compose(
      ReactReduxDevTools,
    )
  );
}