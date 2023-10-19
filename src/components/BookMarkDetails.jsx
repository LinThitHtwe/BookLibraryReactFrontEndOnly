import React from "react";
import UseFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const BookMarkDetails = ({ bookId, userId }) => {
  const bookmarkDetailsUrl = "/api/v1/bookmark/" + bookId + "/" + userId;
  console.log(bookmarkDetailsUrl);
  const { data, isPending, error } = UseFetch(bookmarkDetailsUrl);
  console.log("data-bookmark detail---", data);
  console.log(typeof data);
  //console.log(Array.isArray(data.bookmarkPages));
  return (
    <ul className="bookmark-details">
      {data &&
        data[0].bookmarkPages.map((d) => (
          <li key={d.id}>
            <Link to={`/book/${data[0].bookId}/${d.page_no}`}>
              <span>Page {d.page_no}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BookMarkDetails;
