import axios from "axios";
import React, { useEffect } from "react";
const BookmarksList = () => {
  console.log("bookmark");
  useEffect(() => {
    axios
      .get("/api/v1/bookmark/1/1")
      .then((res) => {
        if (!res.ok) {
          console.log("not okay");
        }
        console.log(res.data);
        return res;
      })
      .then((data) => {
        console.log("my data--" + data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="sidebar-dropdown bookmark-item">
      <ul>
        <li>
          <a href="#">Book1</a>
        </li>
        <li>
          <a href="#">Book1</a>
        </li>
        <li>
          <a href="#">Book1</a>
        </li>
      </ul>
    </div>
  );
};

export default BookmarksList;
