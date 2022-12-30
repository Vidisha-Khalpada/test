import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
//import { useDispatch } from "react-redux";
import { store } from "../Redux/store";

const CounterButtons = () => {
  //const dispatch=useDispatch()
  return (
    <div data-testid="counterButtons">
      <button onClick={()=>
      {
        store.dispatch(handleAddActionObj(1))
      }} data-testid="addButton">ADD</button>
      <button onClick={()=>
      {
        store.dispatch(handleReduceActionObj(1))
      }} data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
