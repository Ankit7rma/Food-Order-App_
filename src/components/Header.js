import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const css = {
  backgroundColor: "#FFF380",
};
const Title = () => {
  return <img className="logo" alt="Logo" src={LOGO_URL} />;
};
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
const onlineStatus= useOnlineStatus();
  return (
    <div className="header" style={css}>
      <Title />
      {
        //This is comment
      }
      <div className="nav-item">
        <ul>
        <li>Online Status:{onlineStatus?'😁':'😴'}</li>
          <li>
          <Link to="/">Home </Link>
          </li>
          <li> <Link to="/About">About </Link></li>
          <li><Link to="/Contact">Contact </Link></li>
          <li><Link to="/grocery">Grocery </Link></li>
          <li><Link to="/Cart">Cart </Link></li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
