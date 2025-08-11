
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://hipfonts.com/wp-content/uploads/2022/11/amazon-logo-cover.png"
            height="49px"
            width="114px"
            alt="Logo"
          />
        </Link>
        
        <div className="navbar-toggler border border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light "></span>
        </div>

        <div className="collapse navbar-collapse bg-dark" id="navbarNav" style={{zIndex:'1'}}>
          <div className="location-sec mx-3">
            <div className="d-flex align-items-center">
              <div className="nav-location">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="nav-loc">
                <div className="nav-div">Delivering to Ludhiana 141015</div>
                <span className="nav-span text-light">Update Location</span>
              </div>
            </div>
          </div>

          <div className="searchbar d-flex align-items-center flex-grow-1 mx-2">
            <div className="dropdown">
              <div
                className="btn btn-secondary dropdown-toggle border-0 rounded-0"
                id="searchdropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All
              </div>
              <ul className="dropdown-menu" aria-labelledby="searchdropdown">
                <li><a className="dropdown-item" href="#">All Categories</a></li>
                <li><a className="dropdown-item" href="#">Alexa Skills</a></li>
             <li><a className="dropdown-item" href="#">Amazon Devices</a></li>
             <li><a className="dropdown-item" href="#">Amazon Fashion</a></li>
             <li><a className="dropdown-item" href="#">Amazon Fresh</a></li>
             <li><a className="dropdown-item" href="#">Amazon Pharmacy</a></li>
             <li><a className="dropdown-item" href="#">Appliances</a></li>
             <li><a className="dropdown-item" href="#">Apps and games</a></li>
             <li><a className="dropdown-item" href="#">Baby</a></li>
             <li><a className="dropdown-item" href="#">Beauty</a></li>
             <li><a className="dropdown-item" href="#">Deals</a></li>
             <li><a className="dropdown-item" href="#">Electronics</a></li>
             <li><a className="dropdown-item" href="#">Furniture</a></li>
              </ul>
            </div>

            <input
              type="search"
              className="search-input"
              placeholder="Search Amazon.in"
            />
            <div className="search-icon">
              <i className="bi bi-search"></i>
            </div>
          </div>

          <div className="lang-dropdown text-light mx-3 p-0">Lang</div>

          <div className="nav-signin mx-3 p-0">
            <Link to="/signin" className="text-light"><div className='nav-div'>Hello, Sign in</div></Link>
            <span className="nav-span text-light">Accounts & List</span>
          </div>

          <div className="nav-return mx-3">
            <Link to="./signin" className="text-light"><div className='nav-div'>Return</div></Link>
            <span className="nav-span text-light">& Order</span>
          </div>

          <Link to='/cart' className="cart-icon text-light mx-3">
            <i className="bi bi-cart3"></i>
            <span className="cart-span text-light">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







