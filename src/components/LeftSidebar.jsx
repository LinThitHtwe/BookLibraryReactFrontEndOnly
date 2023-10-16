import BookmarksList from "./BookmarksList";
import React, { useState } from "react";
import WishList from "./WishList";
const LeftSidebar = () => {
  const [isBookmarkToggleOn, setIsBookmarkToggleOn] = useState(false);
  const [isWishListToggleOn, seIsWishListToggleOn] = useState(false);

  const bookmarkToggleClick = () => {
    if (isBookmarkToggleOn) {
      setIsBookmarkToggleOn(false);
      return;
    }
    setIsBookmarkToggleOn(true);
  };

  const wishToggleClick = () => {
    if (isWishListToggleOn) {
      seIsWishListToggleOn(false);
      return;
    }
    seIsWishListToggleOn(true);
  };

  return (
    <div className="left-sidebar">
      <ul className="sidebar-content">
        <li className="sidebar-dropdown">
          <i class="fa-solid fa-house"></i>
          <a href="#">Home</a>
        </li>
        <li>
          <a className="sidebar-dropdown" onClick={bookmarkToggleClick}>
            <i class="fa-regular fa-bookmark"></i> Bookmark
          </a>
        </li>
        <li>{isBookmarkToggleOn && <BookmarksList />}</li>
        <li>
          <a className="sidebar-dropdown" onClick={wishToggleClick}>
            <i class="fa-regular fa-heart"></i> Wish List
          </a>
        </li>
        <li>{isWishListToggleOn && <WishList />}</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
