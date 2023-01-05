import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const storedata=useSelector((storedata)=>
  {
    return storedata.auth.isAuth
  })
  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {storedata?<Navigate to="/"/>:
        <button data-testid="navbar-login-button"><Link to="/login">LOGIN</Link></button>}
      </div>
    </div>
  );
};

export default Navbar;
