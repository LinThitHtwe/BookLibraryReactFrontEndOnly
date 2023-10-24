import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTheme } from "../context/ThemeProvider";
import UseFetch from "../hooks/useFetch";
import BookDetailModal from "./BookDetailModal";

const BookCard = ({ fetchUrl, searchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartClick, setHeartClick] = useState([]);
  const bookDBRef = useRef(null);
  const { data: bookData, isPending, error } = UseFetch(fetchUrl);
  const [darkTheme, setDarkTheme] = useTheme();
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Number(startIndex) + Number(itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const filteredBookData = bookData?.filter((bd) => {
    const titleMatch = bd.book.title.toLowerCase().includes(searchQuery);
    const authorMatch = bd.author.name.toLowerCase().includes(searchQuery);

    return titleMatch || authorMatch;
  });

  const handleOpenModal = (e, bd) => {
    e.preventDefault();
    bookDBRef.current = bd;
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleHeartClick = (e, bd) => {
    e.preventDefault();
    const index = heartClick.indexOf(bd.book.id);
    if (index == -1) {
      setHeartClick([...heartClick, bd.book.id]);
    } else {
      const updatedHeartClick = [...heartClick];
      updatedHeartClick.splice(index, 1);
      setHeartClick(updatedHeartClick);
    }
  };

  const paginatedData = filteredBookData?.slice(startIndex, endIndex);

  return (
    <>
      <div className="book-card-container">
        {error && <div>Fail to fetch Book data</div>}
        {isModalOpen && (
          <BookDetailModal
            book={bookDBRef.current}
            handleCloseModal={handleCloseModal}
          />
        )}
        {paginatedData &&
          paginatedData.map((bd) => (
            <Link
              to={"/book/" + bd.book.id}
              className="card-link"
              key={bd.book.id}
            >
              <div className="book-card">
                <img
                  src="https://marketplace.canva.com/EAFersXpW3g/1/0/1003w/canva-blue-and-white-modern-business-book-cover-cfxNJXYre8I.jpg"
                  alt="Book Image"
                />
                <div className="book-info">
                  <p>{bd.book.title}</p>
                  <p>{bd.author.name}</p>
                </div>
                <div className="click">
                  <i
                    className={`fa-${
                      heartClick.includes(bd.book.id) ? "solid" : "regular"
                    } fa-heart hover`}
                    onClick={(e) => handleHeartClick(e, bd)}
                  ></i>
                  <i
                    className="fa-solid fa-ellipsis"
                    onClick={(e) => handleOpenModal(e, bd)}
                  ></i>
                </div>
              </div>
            </Link>
          ))}

        {paginatedData?.length === 0 && <span>No book found</span>}
      </div>

      <div className="pagination-container">
        {filteredBookData && (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil((filteredBookData.length || 0) / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"pagination"}
            pageLinkClassName={"pagination"}
            previousClassName={"pagination next"}
            previousLinkClassName={"pagination"}
            nextClassName={"pagination next"}
            nextLinkClassName={"pagination"}
            activeClassName={"active"}
            breakClassName={"pagination"}
            breakLinkClassName={"pagination"}
          />
        )}
      </div>
    </>
  );
};

export default BookCard;
