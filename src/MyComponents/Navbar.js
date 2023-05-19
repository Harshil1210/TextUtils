import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {props.title}
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/textform">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  {props.about}
                </Link>
              </li>
            </ul>

             <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

Navbar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "HARSHIL",
  about: "About",
};
// 
