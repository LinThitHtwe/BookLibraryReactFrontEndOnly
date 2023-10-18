import React from "react";
import { useTheme } from "../context/ThemeProvider";
const RightSidebar = () => {
  const [darkTheme, setDarkTheme] = useTheme();
  return (
    <div className={`right-sidebar ${darkTheme ? "" : "light"}`}>
      <div className={`profile-container ${darkTheme ? "" : "light"}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYeg6gVBB9s29sFcyBvh2qwM2KL0ZgXuYuYph8XB0oA&s"
          alt="Profile Picture"
        />
        <span>Username</span>
        <div className={`progress-bar-container ${darkTheme ? "" : "light"}`}>
          <div className="progress">
            <span>Book1: </span>
            <progress value="32" max="100">
              32%
            </progress>
          </div>
          <div className="progress">
            <span>Book2: </span>
            <progress value="10" max="100">
              10%
            </progress>
          </div>
          <div className="progress">
            <span>Book3: </span>
            <progress value="80" max="100">
              80%
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
