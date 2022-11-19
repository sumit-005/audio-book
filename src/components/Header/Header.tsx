import React from "react";
import Setting from "../../assets/svg/Setting";
import "./Header.scss";
import Logo from "../../../public/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="settings">
        <Setting />
      </div>
    </div>
  );
};

export default Header;
