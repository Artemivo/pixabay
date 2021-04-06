import React from "react";
import Navigation from "../components/Navigation";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a href="#" className="logo-link">
            LOGO
          </a>
        </div>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
