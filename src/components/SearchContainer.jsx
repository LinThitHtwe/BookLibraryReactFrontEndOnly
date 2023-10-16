import React from "react";
const SearchContainer = () => {
  return (
    <div className="search-container">
      <div class="search-input-container">
        <input type="text" placeholder="Search Books" />
        <span class="material-symbols-outlined">search</span>
      </div>

      <i class="fa-solid fa-circle-half-stroke"></i>
    </div>
  );
};

export default SearchContainer;
