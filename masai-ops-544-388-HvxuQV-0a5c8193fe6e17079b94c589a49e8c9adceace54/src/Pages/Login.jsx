import React, { useState } from "react";
import GetAuth from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const[state,setstate]=useState({email:"",password:""})
  const dispatch=useDispatch()
  
  const storedata=useSelector((storedata)=>
  {
    return storedata.auth.isAuth
  })
  if(storedata)
  {
    return <Navigate to="/" />
  }
  else
  {
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={(e)=>
        {
          e.preventDefault()
          console.log(state)
          //dispatch(GetAuth(state))
        }}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" onChange={(e)=>
          {
            setstate({...state,email:e.target.value})
          }}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" onChange={(e)=>
          {
            setstate({...state,password:e.target.value})
          }}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
}
};

export default Login;
