import SearchContainer from "../components/SearchContainer";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import React from "react";
import CardContainer from "../components/CardContainer";
const Home = () => {
  return (
    <>
      <div className="main-content">
        <SearchContainer />
        <CardContainer />
      </div>
      <RightSidebar />
    </>
  );
};

export default Home;
