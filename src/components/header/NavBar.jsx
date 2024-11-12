import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-500 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <img src="logo.png" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
