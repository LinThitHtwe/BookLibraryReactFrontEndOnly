import React, { useState } from "react";
import UseFetchPages from "../hooks/useFetchPages";
const ReadBookNavbar = ({ id }) => {
  const { data, isPending, error } = UseFetchPages(id, 1);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPage = data?.contents[0].page_no;
  const lastPage = data?.contents[data?.contents.length - 1]?.page_no;

  return (
    <>
      <div className="book-read-navbar">
        <div className="title-container">
          <span>{data?.book.title}</span>
          <i className="fa-solid fa-heart hover"></i>
        </div>
        <div className="page-function-container">
          <div className="page-search">
            <span class="material-symbols-outlined hover">search</span>
            <input type="number" placeholder="1" />
          </div>
          <button>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <i className="fa-regular fa-bookmark hover"></i>
          <button>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-angles-right"></i>
          </button>
          <i className="fa-solid fa-expand hover"></i>
        </div>
      </div>

      <div className="book-page">
        <div className="book-page left">{data?.contents[0]?.content}</div>

        <div className="book-page right">{data?.contents[1]?.content}</div>
      </div>
    </>
  );
};

export default ReadBookNavbar;
