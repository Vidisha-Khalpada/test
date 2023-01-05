import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const isAuth=useSelector((storedata)=>
    {
        console.log(storedata.auth.isAuth)
        return storedata.auth.isAuth
    })
    
    if(isAuth)
    {
        return children
    }
    else
    {
        return <Navigate to="/login"/>
    }
};

export default ReqAuth;
