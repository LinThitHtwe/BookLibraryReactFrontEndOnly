import React, { useState } from "react";
import { ACTIONS } from "../pages/Home";
import { useTheme } from "../context/ThemeProvider";

const SearchContainer = ({ dispatch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [darkTheme, setDarkTheme] = useTheme();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch({
      type: ACTIONS.SEARCH_BOOK,
      payload: { searchQuery: e.target.value },
    });
  };

  return (
    <div className={`search-container ${darkTheme ? "" : "light"}`}>
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

      <i
        className="fa-solid fa-circle-half-stroke hover"
        onClick={() => setDarkTheme(!darkTheme)}
      ></i>
    </div>
  );
};

export default SearchContainer;
