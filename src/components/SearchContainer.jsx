import React from "react";
const SearchContainer = () => {
  return (
    <div className="search-container">
      <div class="search-input-container">
        <input type="text" placeholder="Search Books" />
        <span class="material-symbols-outlined">search</span>
      </div>

      <span className="material-symbols-outlined">dark_mode</span>
    </div>
  );
};

export default SearchContainer;
