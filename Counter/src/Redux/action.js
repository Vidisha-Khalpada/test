//DO NOT change the function names
import { ADD, REDUCE } from "../Redux/actionTypes";

//function to return the add action object
const handleAddActionObj = (data) => {
    return {type:ADD,payload:data}
};

//function to return the reduce action object
const handleReduceActionObj = (data) => {
    return {type:REDUCE,payload:data}
};

export { handleAddActionObj, handleReduceActionObj };
