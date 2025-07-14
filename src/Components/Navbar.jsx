import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🎬 MovieSearch
      </Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
