import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img
          src="/panda.png" // Replace with your logo path
          
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
