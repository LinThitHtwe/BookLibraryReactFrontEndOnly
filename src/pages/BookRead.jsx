// import BookPage from "../components/BookPage";
import { useParams } from "react-router-dom";
import ReadBookNavbar from "../components/ReadBookNavbar";
import React, { useReducer } from "react";
import { useTheme } from "../context/ThemeProvider";

// export const BOOKREADACTIONS = {
//   READ_CONTENT: "read_content",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case BOOKREADACTIONS.READ_CONTENT:
//       return (state = action.payload.bookPageData);
//   }
// }

const BookRead = () => {
  const { id } = useParams();
  const [darkTheme, setDarkTheme] = useTheme();

  // const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className={`book-reading-page ${darkTheme ? "" : "light"}`}>
      <ReadBookNavbar id={id} />
      {/* <BookPage id={id} dispatch={dispatch} /> */}
    </div>
  );
};

export default BookRead;
