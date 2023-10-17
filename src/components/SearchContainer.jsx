import React, { useState } from "react";
import { ACTIONS } from "../pages/Home";

const SearchContainer = ({ dispatch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch({
      type: ACTIONS.SEARCH_BOOK,
      payload: { searchQuery: e.target.value },
    });
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Books"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <span
          className="material-symbols-outlined hover"
          onClick={() =>
            dispatch({
              type: ACTIONS.SEARCH_BOOK,
              payload: { searchQuery: searchQuery },
            })
          }
        >
          search
        </span>
      </div>

      <i className="fa-solid fa-circle-half-stroke hover"></i>
    </div>
  );
};

export default SearchContainer;
