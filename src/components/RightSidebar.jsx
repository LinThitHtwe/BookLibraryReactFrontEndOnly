import React from "react";
import { useTheme } from "../context/ThemeProvider";
import UseFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [darkTheme, setDarkTheme] = useTheme();
  const FETCHPROGRESSURL = "/api/v1/progressingBook/1";

  const { data, isPending, error } = UseFetch(FETCHPROGRESSURL);
  return (
    <div className={`right-sidebar ${darkTheme ? "" : "light"}`}>
      <div className={`profile-container ${darkTheme ? "" : "light"}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYeg6gVBB9s29sFcyBvh2qwM2KL0ZgXuYuYph8XB0oA&s"
          alt="Profile Picture"
        />
        <span>Username</span>
        <div className={`progress-bar-container ${darkTheme ? "" : "light"}`}>
          {data &&
            data.map((d) => (
              <>
                <Link to={`book/${d.book.id}/${d.resumePage}`}>
                  <div className="progress" key={d?.book.id}>
                    <span>{d?.book.title} </span>
                    <progress value={d?.percent} max="100"></progress>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
