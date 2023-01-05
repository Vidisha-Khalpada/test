import axios from "axios"
import { useSearchParams } from "react-router-dom"

//Write the ActionCreator functions here
import { GET_WATCHES_DATA_FAILURE,GET_WATCHES_DATA_REQUEST,GET_WATCHES_DATA_SUCCESS } from "./actionType"
const getWatchRequest=(dispatch)=>
{
    return dispatch({type:GET_WATCHES_DATA_REQUEST})
}
const getWatchSuccess=(payload)=>
{
    return (dispatch)=>
    {
        dispatch({type:GET_WATCHES_DATA_SUCCESS,payload:payload})
    }
}
const getWatchError=(dispatch)=>
{
    return dispatch({type:GET_WATCHES_DATA_FAILURE})
}
const GetWatchData=(url)=>
{
    return(dispatch)=>
    {
        dispatch(getWatchRequest)
        return axios.get(url)
        .then((res)=>dispatch(getWatchSuccess(res.data)))
        .catch((e)=>dispatch(getWatchError))
    }
}
export default GetWatchData
