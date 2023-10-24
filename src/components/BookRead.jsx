import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const BookRead = () => {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [isBookmarkClick, setIsBookmarkClick] = useState(false);
  const [darkTheme, setDarkTheme] = useTheme();
  const handleHeartClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  const handleBookmarkClick = () => {
    setIsBookmarkClick(!isBookmarkClick);
  };
  return (
    <>
      <div className="book-read-navbar">
        <div className="title-container">
          <span>Title</span>
          <i
            className={`fa-${
              isHeartClick ? "solid" : "regular"
            } fa-heart hover`}
            onClick={handleHeartClick}
          ></i>
        </div>
        <div className="page-function-container">
          <div className="page-search">
            <span class="material-symbols-outlined hover">search</span>
            <input type="number" placeholder="1" />
          </div>
          <button onClick={handlePreviousPageClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={handleNextPageClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <i
            className={`fa-${
              isBookmarkClick ? "solid" : "regular"
            } fa-bookmark hover`}
            onClick={handleBookmarkClick}
          ></i>
          <button>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-angles-right"></i>
          </button>
          <i className="fa-solid fa-expand hover"></i>
          <i
            className="fa-solid fa-circle-half-stroke hover"
            onClick={() => setDarkTheme(!darkTheme)}
          ></i>
        </div>
      </div>

      <div className={`book-page ${darkTheme ? "" : "light"}`}>
        <div className={`book-page left ${darkTheme ? "" : "light"}`}>
          <p>1</p>
          <p>Content</p>
        </div>

        <div className={`book-page right ${darkTheme ? "" : "light"}`}>
          <p>2</p>
          <p>Blah BLah</p>
        </div>
      </div>
    </>
  );
};

export default BookRead;
