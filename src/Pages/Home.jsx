import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";
import FilterDropdown from "../Components/FilterDropdown";
import Pagination from "../Components/Pagination";
import { searchMovies } from "../Service/OmdbAPI";

const suggestionsPool = [
  "Batman",
  "Avengers",
  "Matrix",
  "Spider",
  "Star",
  "Harry",
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSearchMode = query.trim() !== "";

  useEffect(() => {
    if (isSearchMode) {
      fetchMovies(query, page, type);
    } else {
      fetchSuggestions();
    }
  }, [query, page, type]);

  const fetchMovies = async (q, p, t) => {
    try {
      setLoading(true);
      setError("");
      const data = await searchMovies(q, p, t);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error || "No results found.");
      }
    } catch (err) {
      setError("Failed to fetch movies.");
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async () => {
    const randomQuery =
      suggestionsPool[Math.floor(Math.random() * suggestionsPool.length)];
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(randomQuery, 1, "");
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(0); // No pagination for suggestions
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch {
      setError("Failed to fetch suggestions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex items-center mb-4 gap-2">
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
      <div className="flex justify-between my-4">
        <h3 className="text-2xl text-violet-950 font-bold">Suggested movies</h3>
        {!isSearchMode && (
          <button
            onClick={fetchSuggestions}
            className="bg-gradient-to-l from-cyan-900 via-emerald-400 to-lime-900 ml-4 text-white px-8 rounded cursor-pointer"
          >
            Refresh Suggestions
          </button>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {isSearchMode && totalResults > 10 && (
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
