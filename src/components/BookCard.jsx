import React from "react";
import useBooksFetch from "../hooks/useBooksFetch";

const BookCard = ({ fetchUrl }) => {
  console.log("hihi");
  const { data: bookData, isPending, error } = useBooksFetch(fetchUrl);

  return (
    <>
      {bookData &&
        bookData.slice(1, 4).map((bd) => (
          <div className="book-card" key={bd.book.id}>
            <img
              src="https://marketplace.canva.com/EAFersXpW3g/1/0/1003w/canva-blue-and-white-modern-business-book-cover-cfxNJXYre8I.jpg"
              alt="Book Image"
            />
            <span>{bd.book.title}</span>
            <span>{bd.author.name}</span>
            <span>Categories</span>
          </div>
        ))}
    </>
  );
};

export default BookCard;
