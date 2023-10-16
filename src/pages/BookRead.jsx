import React from "react";

const BookRead = () => {
  return (
    <div className="book-reading-page">
      <div className="book-read-navbar">
        <div className="title-container">
          <span>BookTitle</span>
          <i class="fa-solid fa-heart"></i>
        </div>
        <div className="page-function-container">
          <div className="page-search">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="1" />
          </div>
          <button>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
          <i class="fa-regular fa-bookmark"></i>
          <button>
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-angles-right"></i>
          </button>
          <i class="fa-solid fa-expand"></i>
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
