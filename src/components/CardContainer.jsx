import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const showAllBookUrl = "api/v1/booksList";

const CardContainer = () => {
  return (
    <div className="card-container">
      <BookCard fetchUrl={showAllBookUrl} />
    </div>
  );
};

export default CardContainer;
