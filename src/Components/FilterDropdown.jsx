import React from "react";

const FilterDropdown = ({ selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="ml-4 mt-5 p-2 border-2 border-cyan-400"
    >
      <option value="">All</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
};

export default FilterDropdown;
