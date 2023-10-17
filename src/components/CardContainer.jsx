import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const showAllBookUrl = "api/v1/booksList";

const CardContainer = ({ searchQuery }) => {
  return (
    <div className="card-container">
      <BookCard fetchUrl={showAllBookUrl} searchQuery={searchQuery} />
    </div>
  );
};

export default CardContainer;
