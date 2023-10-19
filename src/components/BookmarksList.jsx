import axios from "axios";
import React, { useEffect } from "react";
import UseFetch from "../hooks/useFetch";
import { useState } from "react";
import BookMarkDetails from "./BookMarkDetails";
const BookmarksList = () => {
  const fetchUrl = "/api/v1/bookmark/1";
  const { data, isPending, error } = UseFetch(fetchUrl);
  const [openItemIds, setOpenItemIds] = useState([]);

  const toggleBookmarkDetail = (itemId) => {
    if (openItemIds.includes(itemId)) {
      setOpenItemIds(openItemIds.filter((id) => id !== itemId));
    } else {
      setOpenItemIds([...openItemIds, itemId]);
    }
  };
  return (
    <div className="sidebar-dropdown bookmark-item">
      <ul>
        {data &&
          data.map((d) => (
            <li key={d.id} onClick={() => toggleBookmarkDetail(d.id)}>
              <span>{d.bookTitle}</span>
              {openItemIds.includes(d.id) && (
                <BookMarkDetails bookId={d.bookId} userId={1} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookmarksList;
