import React, { useEffect, useRef, useState } from "react";
import UseFetchPages from "../hooks/useFetchPages";
import axios from "axios";
import zlib from "zlib";
import pako from "pako";

const ReadBookNavbar = ({ id }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);
  const firstPageIndexRef = useRef(0);
  const secondPageIndexRef = useRef(1);
  // const [decompressedData, setDecompressedData] = useState([]);
  const firstPage = data?.contents[0].page_no;
  const lastPage = data?.contents[data?.contents.length - 1]?.page_no;

  const isCurrentPageTwo = currentPage === 2;
  const subtractValue = isCurrentPageTwo ? -1 : -2;

  const shouldFetchData = currentPage === lastPage + subtractValue;
  let twoDArray = [];
  const fetchUrl = `api/v1/book/${id}/${currentPage}`;

  useEffect(() => {
    const fetchData = () => {
      console.log("fetchhhhh");
      axios
        .get(fetchUrl)
        .then((res) => {
          if (res.status != 200) {
            throw new Error("Network response was not ok");
          }
          return res.data;
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    };
    fetchData();
    firstPageIndexRef.current = 0;
    secondPageIndexRef.current = 1;
  }, [id, shouldFetchData]);

  const handleNextPageClick = () => {
    console.log("click");
    setCurrentPage((prevPage) => prevPage + 2);
    firstPageIndexRef.current += 1;
    secondPageIndexRef.current += 2;
  };

  const handlePreviousPageClick = () => {
    setCurrentPage((prevPage) => prevPage - 2);
    firstPageIndexRef.current -= 1;
    secondPageIndexRef.current -= 2;
  };
  if (data) {
    const originalArray = data?.contents;

    twoDArray = originalArray.reduce((result, item, index, array) => {
      if (index % 2 === 0) {
        result.push([item, array[index + 1]]);
      }
      return result;
    }, []);
  }

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
          <button onClick={handlePreviousPageClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={handleNextPageClick}>
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
        <div className="book-page left">
          {twoDArray[firstPageIndexRef.current] && (
            <span>{twoDArray[firstPageIndexRef.current][0].content}</span>
          )}
        </div>

        <div className="book-page right">
          <div className="book-page left">
            {twoDArray[firstPageIndexRef.current] && (
              <span>{twoDArray[firstPageIndexRef.current][1].content}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBookNavbar;
