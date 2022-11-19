import React from "react";
import Document from "../../assets/svg/Document";
import Home from "../../assets/svg/Home";
import Search from "../../assets/svg/Search";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <Home />
        <p>Home</p>
      </div>
      <div className="navbar-item">
        <Search />
        <p>Search</p>
      </div>
      <div className="navbar-item">
        <Document />
        <p>Library</p>
      </div>
    </div>
  );
};

export default Navbar;
