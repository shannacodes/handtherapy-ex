import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
