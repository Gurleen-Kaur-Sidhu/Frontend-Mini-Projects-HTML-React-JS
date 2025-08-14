
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* <div class="container-fluid"> */}
            <a className="navbar-brand" href="#">
              <img src="./images/Logo.png" width={162.22} height={42}></img>
            </a>
            <button
              className="navbar-toggler border border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{color:"white"}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link to='/' class="nav-link text-light" href="#">
                  Home
                </Link>
                <Link to='/service' className="nav-link text-light" href="#">
                  Services
                </Link>
                
                <Link to='/about' className="nav-link text-light" href="#">
                  About
                </Link>
                <button className="btn border rounded-pill bg-light nav-button" href="#">
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
