import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const watchreducer = (state = initialState,action) => {
  if(action.type===GET_WATCHES_DATA_REQUEST)
  {
    state={...state,isLoading:true}
  }
  else if(action.type===GET_WATCHES_DATA_SUCCESS)
  {
    state={...state,isLoading:false,watches:action.payload}
  }
  else if(action.type===GET_WATCHES_DATA_FAILURE)
  {
    state={...state,isLoading:false,isError:true}
  }
  return state;
};

export { watchreducer };
