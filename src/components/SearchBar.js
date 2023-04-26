import React from "react";
function SearchBar({ searchTerm, onSearch }) {
  
  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-label">Search for a transaction</label>
      <input 
      className="searchInput"
        type="text"
        id="search"
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;