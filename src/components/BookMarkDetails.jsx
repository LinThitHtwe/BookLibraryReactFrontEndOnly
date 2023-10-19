import React from "react";
import UseFetch from "../hooks/useFetch";

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
            <span>Page {d.page_no}</span>
          </li>
        ))}
    </ul>
  );
};

export default BookMarkDetails;
