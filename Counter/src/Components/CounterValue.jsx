import React from "react";
import { useState } from "react";
//import { useSelector } from "react-redux";
import { store } from "../Redux/store";

const CounterValue = () => {
  //get the counter value from the Redux store
  let counter=store.getState()
  const [state, setState ] = useState(0);
  const forceUpdate=()=>
  {
    setState(pre=>pre+1)
  }
  store.subscribe(()=>
  {
    forceUpdate()
  })
  //console.log(counter.counter)
  return <div data-testid="counterValue">{counter.counter}</div>;
};

export default CounterValue;
