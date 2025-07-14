import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-center py-4 mt-53 text-sm text-gray-600">
      &copy; {new Date().getFullYear()} MovieSearch App. Built with React & OMDB
      API.
    </footer>
  );
};

export default Footer;
