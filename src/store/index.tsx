import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const totalReducer = {
};

const store = createStore(
  combineReducers({ ...totalReducer }),
  composeWithDevTools(
    applyMiddleware(),
  )
);

export default store;
