import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container p-2">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src="media/images/logo.png"
            alt="logo"
            style={{ width: "50%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
          style={{ width: "80%" }}
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "#3f4c51" }}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/mobile"
                onClick={closeNavbar}
                style={{ color: "#3f4c51" }}
              >
                Mobile App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/recipes"
                onClick={closeNavbar}
                style={{ color: "#3f4c51" }}
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/blog"
                onClick={closeNavbar}
                style={{ color: "#3f4c51" }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/gallery"
                onClick={closeNavbar}
                style={{ color: "#3f4c51" }}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
