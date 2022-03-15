import React from "react"
import { useEffect } from "react";

export function HeaderModule({ title }) {
  //main header component that is on all pages
  useEffect(() => {
    document.title = title;
  }, [title]);
  // in the future we will add links and routing to the buttons
  return (
    
    <header>
      <nav class="navbar">
        <ul class="nav-option">
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Specials</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Sign Up</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Login</a>
          </li>
        </ul>
      </nav>

      <div class="cover">
        <h1 class="company back">Insert Title</h1>
      </div>

      <br />
    </header>
  );
}

export default HeaderModule;