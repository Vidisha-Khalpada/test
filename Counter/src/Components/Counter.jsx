import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
//import {Provider} from "react-redux"
//import { store } from "../Redux/store";


const Counter = () => {
  return (
    //<Provider store={store}>
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
    </div>
    //</Provider>
  );
};

export default Counter;
