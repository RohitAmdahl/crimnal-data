import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="">
      <div className=" grid grid-cols-3 text-center">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src="./logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            Criminal data analysis
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
