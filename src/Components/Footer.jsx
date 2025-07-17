import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-center mt-6 py-4 text-sm text-white">
      &copy; {new Date().getFullYear()} MovieSearch App. Built with React & OMDB
      API.
    </footer>
  );
};

export default Footer;
