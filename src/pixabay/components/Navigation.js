import React from "react";

function Navigation() {
  return (
    <div>
      <nav className="navigation-header">
        <ul className="navigation-menu">
          <li className="navigation-header-list">
            <a className="navigation-header-link" href="#">
              HOME
            </a>
          </li>
          <li className="navigation-header-list">
            <a className="navigation-header-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="navigation-header-list">
            <a className="navigation-header-link" href="#">
              CONTACTS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
