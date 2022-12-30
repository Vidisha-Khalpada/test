import { ADD, REDUCE } from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
let initialdata={counter: 10}
const reducer = (state=initialdata,action) => {
    
    if(action.type===ADD)
    {
        state={...state,"counter":state.counter+action.payload}
    }
    else if(action.type===REDUCE)
    {
        state={...state,"counter":state.counter-action.payload}
    }
    //console.log(state)
    return state
};

export { reducer };
