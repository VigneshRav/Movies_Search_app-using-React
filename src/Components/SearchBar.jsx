import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (query.trim()) onSearch(query);
      }}
      className="flex w-full"
    >
      <input
        className="p-2 border-2 border-cyan-400 mt-5 w-full rounded-l"
        type="text"
        placeholder="🔍 Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-600 mt-5 text-white px-4 py-2 rounded cursor-pointer transition hover:scale-110 hover:bg-red-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
