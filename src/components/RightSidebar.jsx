import React from "react";
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="profile-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYeg6gVBB9s29sFcyBvh2qwM2KL0ZgXuYuYph8XB0oA&s"
          alt="Profile Picture"
        />
        <span>Username</span>
        <div className="progress-bar-container">
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
