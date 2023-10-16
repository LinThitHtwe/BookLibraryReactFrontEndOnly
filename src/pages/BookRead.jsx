import React from "react";

const BookRead = () => {
  return (
    <div className="book-reading-page">
      <div className="book-read-navbar">
        <div className="title-container">
          <span>BookTitle</span>
          <span className="material-symbols-outlined fill">favorite</span>
        </div>
        <div className="page-function-container">
          <div className="page-search">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="1" />
          </div>
          <button>
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button>
            <span class="material-symbols-outlined">navigate_next</span>
          </button>
          <span class="material-symbols-outlined">bookmark</span>
          <button>
            <span class="material-symbols-outlined">
              keyboard_double_arrow_left
            </span>
          </button>
          <button>
            <span class="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
          <span class="material-symbols-outlined">fullscreen</span>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page left">Left Page</div>
        <div className="book-page right">Right Page</div>
      </div>
    </div>
  );
};

export default BookRead;
