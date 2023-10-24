import React from "react";

const BookDetailModal = ({ book, handleCloseModal }) => {
  console.log(book);
  return (
    <div className="book-detail-modal">
      <div className="modal-header">
        <h2>{book.book.title}</h2>
        <button onClick={handleCloseModal}>X</button>
      </div>
      <p>Description : {book.author.description}</p>
      <p>Author : {book.author.name}</p>
      <p>Published Date : {book.book.published}</p>
    </div>
  );
};

export default BookDetailModal;
