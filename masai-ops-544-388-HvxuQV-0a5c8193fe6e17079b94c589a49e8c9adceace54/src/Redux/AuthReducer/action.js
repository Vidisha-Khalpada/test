//Write the ActionCreator functions here
import axios from "axios"
import { LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS } from "./actionTypes"
const getAuthrequest=(dispatch)=>
{
    return dispatch({type:LOGIN_REQUEST})
}
const getAuthsuccess=(payload)=>
{
    return (dispatch)=>
    {
        dispatch({type:LOGIN_SUCCESS,payload:payload})
    }
}
const getAuthFailure=(dispatch)=>
{
    return dispatch({type:LOGIN_FAILURE})
}
const GetAuth=(input)=>
{
    return (dispatch)=>
    {
        dispatch(getAuthrequest)
        return axios.post(`https://reqres.in/api/login`,input)
        .then((res)=>dispatch(getAuthsuccess(res.data)))
        .catch((e)=>dispatch(getAuthFailure))
    }
}
export default GetAuth
