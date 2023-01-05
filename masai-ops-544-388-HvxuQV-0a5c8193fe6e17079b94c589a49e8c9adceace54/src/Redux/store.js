// NOTE: use this store variable to create a store.
import {createStore} from "redux"

import {combineReducers} from "redux"
import {watchreducer} from "../Redux/AppReducer/reducer.js"
import {authreducer} from "../Redux/AuthReducer/reducer.js"
//import {logger} from "redux-logger"
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"
//console.log(legacy_createStore)
const cb=combineReducers(
  {watch:watchreducer,auth:authreducer}
  )
  const custommiddleware=store=>next=>action=>{
    if (typeof action === "function") {
      return action(store.dispatch);
    }
    return next(action)
  }
const store = createStore(cb,applyMiddleware(custommiddleware,thunk));


export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
