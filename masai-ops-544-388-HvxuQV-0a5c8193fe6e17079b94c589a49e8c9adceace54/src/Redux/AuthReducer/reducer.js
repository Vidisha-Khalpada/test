
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const authreducer = (state = initialState,action) => {
  if(action.type===LOGIN_REQUEST)
  {
    state={...state,isLoading:true}
  }
  else if(action.type===LOGIN_SUCCESS)
  {
    state={...state,isLoading:false,token:action.payload.token,isAuth:true}
  }
  else if(action.type===LOGIN_FAILURE)
  {
    state={...state,isLoading:false,isError:true}
  }
  return state;
};

export { authreducer };
