import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";
import FilterDropdown from "../Components/FilterDropdown";
import Pagination from "../Components/Pagination";
import { searchMovies } from "../Service/OmdbAPI";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      fetchMovies();
    }
  }, [query, page, type]);

  const fetchMovies = async () => {
    try {
      setError("");
      const data = await searchMovies(query, page, type);
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults));
    } catch (err) {
      setMovies([]);
      setTotalResults(0);
      setError(err.message);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex items-center mb-4">
        <SearchBar
          onSearch={(q) => {
            setQuery(q);
            setPage(1);
          }}
        />
        <FilterDropdown
          selected={type}
          onChange={(t) => {
            setType(t);
            setPage(1);
          }}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {totalResults > 10 && (
        <Pagination
          currentPage={page}
          totalResults={totalResults}
          onPageChange={(p) => setPage(p)}
        />
      )}
    </div>
  );
};

export default Home;
