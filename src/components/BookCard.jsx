import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTheme } from "../context/ThemeProvider";
import UseFetch from "../hooks/useFetch";

const BookCard = ({ fetchUrl, searchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handeClick = (e) => {
    e.preventDefault();
    console.log("heart click");
  };

  const paginatedData = filteredBookData?.slice(startIndex, endIndex);

  return (
    <>
      <div className="book-card-container">
        {error && <div>Fail to fetch Book data</div>}
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
                    className="fa-regular fa-heart hover"
                    onClick={handeClick}
                  ></i>
                  <i
                    className="fa-solid fa-ellipsis"
                    onClick={handleOpenModal}
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
