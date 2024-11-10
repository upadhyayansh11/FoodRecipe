import React from "react";
import "./Home.css";
function Nav2() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mt-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Recipes
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class=" search form-control me-2"
                type="search"
                placeholder="Search recipe and more..."
                aria-label="Search"
              ></input>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-link2 dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort by:<b>Newest</b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav2;
