import React from "react";
import { Link} from "react-router-dom";
import Search from "../Components/Search";
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsFillSunFill} from "react-icons/bs"

const NavBar = ({darkMode,setDarkMode}) => {
  return (
    <div className="p-2 px-4">
      <div className="flex flex-row justify-between text-lg">
        <Link to="/">
            <p className="text-2xl">Majesty</p>
        </Link>
        <button type="button" className="text-2xl" onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? <BsFillSunFill/> :<BsFillMoonStarsFill/>}
        </button>
      </div>
      <Search/>
    </div>
  );
};

export default NavBar;
