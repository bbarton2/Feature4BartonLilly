import React from "react"
import { useEffect } from "react";

export function HeaderModule({ title }) {
  //main header component that is on all pages
  useEffect(() => {
    document.title = title;
  }, [title]);
  // in the future we will add links and routing to the buttons
  return (
  <div>
    <header>
      <nav className="navbar">
        <ul className="nav-option">
          <li className="nav-item">
            <a href="index.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Specials</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Sign Up</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Login</a>
          </li>
        </ul>
      </nav>

      <div className="cover">
        <h1 className="company back">Insert Title</h1>
      </div>

      <br />
    </header>
  </div>
  );
}

export default HeaderModule;