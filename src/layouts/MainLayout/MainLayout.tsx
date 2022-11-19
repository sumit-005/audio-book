import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Library from "../../pages/Library/Library";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="main-layout-header">
        <Header />
      </div>
      <div className="main-layout-content">
        <Library />
      </div>
      <div className="main-layout-footer">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
