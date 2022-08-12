import React from "react";
import { Link } from "react-router-dom";
import StoreData from "../../../StoreData";

interface menuItemObj {
  name: string;
  image: string;
  to: string;
}

export default function SidebarItem({ name, image, to }: menuItemObj) {
  return (
    <Link to={to} className="no-underline">
      <li
        className="md:flex md:p-2 md:ml-2 items-center cursor-pointer text-gray-500 rounded-md hover:(shadow-md text-gray-700)"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {StoreData.isHideSidebar ? (
          <span />
        ) : (
          <span className="invisible md:visible">{name}</span>
        )}

        <img
          src={image}
          className="w-7 h-7 my:0 mx-auto md:ml-auto md:mr-4"
          alt="dashboard"
        />
      </li>
    </Link>
  );
}
