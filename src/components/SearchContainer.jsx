import React from "react";
const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input type="text" placeholder="Search Books" />
        <span className="material-symbols-outlined hover">search</span>
      </div>

      <i className="fa-solid fa-circle-half-stroke hover"></i>
    </div>
  );
};

export default SearchContainer;
