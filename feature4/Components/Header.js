import {
  html,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function Header({ title }) {
  //main header component that is on all pages
  useEffect(() => {
    document.title = title;
  }, [title]);
  // in the future we will add links and routing to the buttons
  return html`
    <!-- The html that focuses on the navigation bar -->
    <header>
      <nav class="navbar">
        <ul class="nav-option">
          <!-- Evenetually all nav items are going to be routed to other pages -->
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
        <h1 class="company back">${title}</h1>
      </div>

      <br />
      <!-- Information for what this website is gonig to offer -->
    </header>
  `;
}
