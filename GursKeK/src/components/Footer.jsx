import React from 'react'
import { Container, Nav,Navbar, NavLink } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <section className="footer">
        <Container className="">
          <div className="w-100 logo-div d-flex align-items-center justify-content-center">
            <img src="./Cake and Dessert.png"></img>
          </div>

          <div className="w-100 d-flex align-items-center justify-content-center column-gap-3">
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FaInstagram />
            </div>
            <div className="social-icon">
              <FaXTwitter />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center mt-4 p-3 last-div">
            <Nav.Link href="#home">SHOP</Nav.Link>
            <Nav.Link href="#link">PAYMENT</Nav.Link>
            <Nav.Link href="#link">PRIVACY POLICY</Nav.Link>
            <Nav.Link href="#link">TERMS AND CONDITIONS</Nav.Link>
            <Nav.Link href="#link">GIFTS CARDS</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Footer
