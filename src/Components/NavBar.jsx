import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { BsFillMoonStarsFill } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className="p-3 px-4">
        <div className="flex flex-row justify-between text-lg">
          <Link to="/" >
            <p className="text-2xl border-solid border-2 border-black p-1 bg-blue-200 text-black font-primary dark:text-secondary dark:bg-cyan-900 dark:border-secondary">Majesty</p>
          </Link>
          <button type="button" className="text-2xl" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsFillSunFill className="border-solid border-2 border-black text-4xl p-1 bg-blue-200 text-black dark:text-secondary dark:bg-cyan-900 dark:border-secondary" /> : <BsFillMoonStarsFill className="border-solid border-2 border-black text-4xl p-1 bg-blue-200 text-black dark:text-secondary dark:bg-primary dark:border-secondary" />}
          </button>
        </div>
      </div>
      <Search />
    </>
  );
};

export default NavBar;
