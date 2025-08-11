import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          {/* <div class="container-fluid"> */}
            <a class="navbar-brand" href="#">
              <img src="./images/Logo.png" width={162.22} height={42}></img>
            </a>
            <button
              class="navbar-toggler border border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" style={{color:"white"}}></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a class="nav-link text-light" href="#">
                  Product
                </a>
                <a class="nav-link text-light" href="#">
                  Services
                </a>
                <Link to='/about' class="nav-link text-light" href="#">
                  About
                </Link>
                <button class="btn border rounded-pill bg-light nav-button" href="#">
                 <b>Log in</b>
                </button>
              </div>
            </div>
          {/* </div> */}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
