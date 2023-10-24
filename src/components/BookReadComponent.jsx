import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookReadComponents = ({ id }) => {
  const { currentPage: currentPageFromUrl } = useParams();
  const [currentPage, setCurrentPage] = useState(
    currentPageFromUrl
      ? Number(currentPageFromUrl) % 2 !== 0
        ? Number(currentPageFromUrl) + 1
        : Number(currentPageFromUrl)
      : 2
  );

  const [searchPage, setSearchPage] = useState(0);
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [isBookmarkClick, setIsBookmarkClick] = useState(false);
  const [darkTheme, setDarkTheme] = useTheme();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const firstFetchPage = useRef(0);
  const lastFetchPage = useRef(0);

  const shouldFetchData =
    lastFetchPage.current == currentPage + 2 ||
    lastFetchPage.current < currentPage;
  const shouldFetchDataBackward = firstFetchPage.current == currentPage - 3;

  const handleSearch = (e) => {
    e.preventDefault();
    if (Number(searchPage) % 2 != 0) {
      setCurrentPage(Number(searchPage) + 1);
    } else {
      setCurrentPage(Number(searchPage));
    }
    setSearchPage("");
  };

  useEffect(() => {
    console.log("fetch");
    const fetchData = () => {
      axios
        .get(`api/v1/book/${id}/${currentPage}`)
        .then((res) => {
          if (res.status != 200) {
            throw new Error("Network response was not ok");
          }
          return res.data;
        })
        .then((data) => {
          console.log("data---", data);
          setData(data);
          setIsPending(false);
          setError(null);
          lastFetchPage.current =
            data.contents[data.contents.length - 1]?.page_no;
          firstFetchPage.current = data.contents[0]?.page_no;
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    };
    fetchData();
  }, [shouldFetchData, shouldFetchDataBackward, currentPageFromUrl]);

  const handleHeartClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  const handleBookmarkClick = () => {
    setIsBookmarkClick(!isBookmarkClick);
  };

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 2);
  };

  const handlePreviousPageClick = () => {
    setCurrentPage(currentPage - 2);
  };

  return (
    <>
      <div className="book-read-navbar">
        <div className="title-container">
          <span>{data?.book.title}</span>
          <i
            className={`fa-${
              isHeartClick ? "solid" : "regular"
            } fa-heart hover`}
            onClick={handleHeartClick}
          ></i>
        </div>
        <div className="page-function-container">
          <div className="page-search">
            <span
              className="material-symbols-outlined hover"
              onClick={handleSearch}
            >
              search
            </span>
            <input
              type="number"
              placeholder="search"
              value={searchPage}
              onChange={(e) => setSearchPage(e.target.value)}
            />
          </div>
          <button
            onClick={handlePreviousPageClick}
            disabled={currentPage === 2}
          >
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
          <p>
            {data &&
              data.contents.find((c) => c.page_no === currentPage - 1)?.page_no}
          </p>
          <p>
            {data &&
              data.contents.find((c) => c.page_no === currentPage - 1)?.content}
          </p>
        </div>

        <div className={`book-page right ${darkTheme ? "" : "light"}`}>
          <p>
            {data &&
              data.contents.find((c) => c.page_no === currentPage)?.page_no}
          </p>
          <p>
            {data &&
              data.contents.find((c) => c.page_no === currentPage)
                ?.content}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookReadComponents;
