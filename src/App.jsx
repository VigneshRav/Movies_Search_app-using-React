import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetails";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";

const App = () => {
  const location = useLocation();

  const showNavbar =
    ["/", "/favorites"].includes(location.pathname) ||
    location.pathname.startsWith("/movie/");

  const showFooter =
    ["/", "/favorites"].includes(location.pathname) ||
    location.pathname.startsWith("/movie/");

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default App;
