// import BookPage from "../components/BookPage";
import { useParams } from "react-router-dom";
import ReadBookNavbar from "../components/ReadBookNavbar";
import React from "react";

const BookRead = () => {
  const { id } = useParams();
  return (
    <div className="book-reading-page">
      <ReadBookNavbar id={id} />
      {/* <BookPage id={id} /> */}
    </div>
  );
};

export default BookRead;
