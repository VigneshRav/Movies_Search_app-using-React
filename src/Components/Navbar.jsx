import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-purple-950 via-blue-600 to-violet-950 text-white px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🎬 MovieSearch
      </Link>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Link to="/">🏡 Home</Link>
        <Link to="/favorites">❤ Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
