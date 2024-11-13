import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-4">
      <div className=" grid grid-cols-3 text-center">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src="./logo.png" alt="logo" />
          </Link>
        </div>
        {/* <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            Criminal data analysis
          </span>
        </div> */}
        <div className="flex items-center justify-between text-center p-3">
          <Link to="/" className=" hover:text-gray-400">
            Home
          </Link>
          <Link to="/offense" className=" hover:text-gray-400">
            Offenses
          </Link>
          <Link to="/victim" className=" hover:text-gray-400">
            Victims
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
