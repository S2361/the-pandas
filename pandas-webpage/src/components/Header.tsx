import React from "react";
import "./Header.css";
import pandaimg from '../images/panda.png';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img
          src={pandaimg} // Replace with your logo path
          alt="panda-logo"
        />
        <a href="/" className="home-link">Home</a>
      </div>
      <div className="header-right">
        <h1>Panda</h1>
      </div>
    </header>
  );
};

export default Header;