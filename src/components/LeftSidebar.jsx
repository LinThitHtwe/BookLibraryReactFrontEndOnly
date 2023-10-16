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
          <span className="material-symbols-outlined">home</span>
          <a href="#">Home</a>
        </li>
        <li>
          <a className="sidebar-dropdown" onClick={bookmarkToggleClick}>
            <span className="material-symbols-outlined">bookmark</span> Bookmark
          </a>
        </li>
        <li>{isBookmarkToggleOn && <BookmarksList />}</li>
        <li>
          <a className="sidebar-dropdown" onClick={wishToggleClick}>
            <span className="material-symbols-outlined">favorite</span> Wish
            List
          </a>
        </li>
        <li>{isWishListToggleOn && <WishList />}</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
