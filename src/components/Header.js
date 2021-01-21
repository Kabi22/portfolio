import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="h-20 w-full bg-gray-100">
      <div className="bg-indigo-800 h-2"></div>
      <div className="text-black varela justify-start text-2xl flex ml-20 pt-5">
        <NavLink className="focus:underline" to="/" exact>
          <p className="mr-12  duration-200 ">Home</p>
        </NavLink>
        <NavLink className="focus:underline mr-12" to="/project">
          Projects
        </NavLink>
        {/* <NavLink className="focus:underline mr-12" to="/about">
          About
        </NavLink> */}
      </div>
    </div>
  );
}

export default Header;
