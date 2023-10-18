import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useTheme } from "../context/ThemeProvider";

const showAllBookUrl = "api/v1/booksList";

const CardContainer = ({ searchQuery }) => {
  const [darkTheme, setDarkTheme] = useTheme();
  return (
    <div className={`card-container ${darkTheme ? "" : "light"}`}>
      <BookCard fetchUrl={showAllBookUrl} searchQuery={searchQuery} />
    </div>
  );
};

export default CardContainer;
