import { useContext, useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "./userContext";
import { useContext } from "react";
import {useSelector} from "react-redux"


const Header = () => {
  
  
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=  useContext(userContext)

  //subscribing to store using selector
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-pink-100 shadow-md sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-20" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4" >
          <li className="px-4">Online Status:{onlineStatus ? "😁" : "😴"}</li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4"> 
            {" "}
            <Link to="/About">About </Link>
          </li>
          <li className="px-4"> 
            <Link to="/Contact">Contact </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4 font-bold"> 
            <Link to="/Cart">Cart - ({cartItems?.length} items) </Link>
          </li>
          <button
            className="login px-4 border border-black bg-purple-400"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold text-lg"> 
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
