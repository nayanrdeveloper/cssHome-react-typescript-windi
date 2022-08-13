import React, { useEffect, useState } from "react";
import Logo from "../../assets/css.png";
import menuImage from "../../assets/menu.png";
import StoreData from "../../../StoreData";
import { observer } from "mobx-react-lite";
import menuIcon from "../../assets/menu.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<any>("");
  const history = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("user");
    const user = "";
    if (login) {
      const user = JSON.parse(login);
      setLoginUser(user.name);
    }
  });

  const logoutHandler = () => {
    localStorage.removeItem("user");
    StoreData.setLoginUser("");
    history("/register");
  };

  return (
    <nav className="md:flex justify-between py-1 px-7 border-b-2 shadow-md bg-white">
      <div className="nav-left-content md:flex gap-2">
        <div className="flex my-auto justify-between md:(flex gap-1)">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 h-10 my-auto" />
            </Link>
          <h1 className={`logo my-auto fade-in-image`}>
            {StoreData.isHideSidebar ? "" : "CssHome"}
          </h1>
         
          <img
            onClick={() => StoreData.setIsHideSidebar()}
            src={menuIcon}
            alt="close"
            className="w-5 h-5 self-center cursor-pointer invisible md:visible"
          />
        </div>
        <ul className="md:flex gap-4 my-auto ml-1">
          {/* <Link to="/register">
            <li className="hover:(shadow-md rounded-md text-gray-700) p-2 text-gray-500 cursor-pointer">
              Register
            </li>
          </Link>
          <Link to="/login">
            {
              StoreData.getLoginUser ? <li onClick={logoutHandler} className="hover:(shadow-md rounded-md text-gray-700) p-2 text-gray-500 cursor-pointer">
              Logout
            </li> : <li className="hover:(shadow-md rounded-md text-gray-700) p-2 text-gray-500 cursor-pointer">
              Login
            </li>
            }
            
          </Link> */}
        </ul>
      </div>
      <div className="md:flex gap-2">
        <button className="p-2 rounded-md text-gray-500 hover:(shadow-md text-gray-700)">
          Contact Us
        </button>
        <p className="p-2 text-gray-500">
          {StoreData.getLoginUser ? `Hello ${StoreData.getLoginUser}` : ""}
        </p>
      </div>
    </nav>
  );
}

export default observer(Navbar);
