import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Card, Form } from "react-bootstrap";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Footer from "./Footer";

import Section3 from "./Section3";

import Slider from "react-slick";

import Plans from "./Plans";

const Mainpage = () => {
  var settings4 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      name: "Lance Jarvis",
      avatar: "images/11.jpg",
      message:
        "We have been using the product for the last one year, and I have to say that it has transformed the way we do business.",
    },
    {
      id: 2,
      name: "Juliet Wright",
      avatar: "images/12.jpg",
      message:
        "It has changed the way I used the website. The product lets you create anything you envision and it does it so easily.",
    },
    {
      id: 3,
      name: "Michael D.",
      avatar: "images/11.jpg",
      message:
        "Insights from the service drove a 30% lift in our conversions, this product service is essential for your company's growth strategy.",
    },
    {
      id: 4,
      name: "Kylie Lutz",
      avatar: "images/12.jpg",
      message:
        "The company really helped with my personal branding - everything from conception to execution was amazing and super professional.",
    },
  ];

  var settings3 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className="mainpage">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/images/logo-light.png"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="link-tag mx-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="link-tag mx-3">
                  Prices
                </Nav.Link>
                <Nav.Link href="#link" className="link-tag mx-3">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="link-tag mx-3">
                  About Us
                </Nav.Link>
              </Nav>
              <Button className="btn-login mx-2 px-3" type="submit">
                <Link to="/login" className="text-decoration-none text-light">
                  Login
                </Link>
              </Button>
              <Button className="mx-2 btn-getstarted px-3" type="submit">
                Get Started
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="container">
          <div className="main-page">
            <div className="">
              <h1 className="text-center heading-1">
                Revolutionize Your Space with <br></br>
                <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
                  AI-powered Tools
                </LinearGradient>
              </h1>
              <h5 className="heading-4 mt-4 text-center">
                Upload Your Room Image and Discover a World of <br></br>Design
                Possibilities Tailored Just for You!
              </h5>

              <Form>
                <Form.Group className="mb-4 mt-4 search-btn d-flex">
                  <Form.Control type="search" placeholder="Search Here" />
                </Form.Group>
              </Form>

              <div className="popular-tags">
                <h6>Popular Tags : </h6>
                <Nav.Link>Creative</Nav.Link>
                <Nav.Link>Sports</Nav.Link>
                <Nav.Link>Animation</Nav.Link>
                <Nav.Link>Fantasy</Nav.Link>
              </div>
            </div>
          </div>
        </Container>

        <div className="second-section">
          <Container>
            <div className="second-sec1">
              <img src="/images/3.jpg"></img>

              <p>
                We are passionate about empowering creatives with the tools they
                need to{" "}
                <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
                  bring their vision
                </LinearGradient>{" "}
                to life thats why we have developed
              </p>
              <Button className="btn-getstarted" type="submit">
                Join Community
              </Button>
            </div>

            <div className="second-sec2">
              <div className="second-sec3">
                <img src="/images/4.jpg" style={{ maxHeight: "458px" }}></img>
                <img src="/images/5.jpg"></img>
              </div>

              <div>
                <img src="/images/6.jpg"></img>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Section3></Section3>

      <div className="section-fourth">
        <Container>
          <div className="fourth-sec1">
            <img src="/images/7.png"></img>
          </div>

          <div className="fourth-sec2">
            <h5>Welcome</h5>

            <h3>
              Powerful AI Features Built for{" "}
              <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
                Marketing
              </LinearGradient>
            </h3>

            <p>
              We are passionate about empowering creatives with the tools they
              need to bring their vision to life that is why we have developed.
              Working globally with largest brands, We believe that safe. We
              combine ideas and behaviours, and insights with that customers
              love our services.
            </p>

            <h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              Intelligent image editing
            </h6>

            <h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              Customizable image styles
            </h6>

            <h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              Unprecedented Image Creation
            </h6>
          </div>
        </Container>
      </div>

      <div className="fifth-section">
        <Container>
          <h3>
            Supercharge your{" "}
            <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
              Creative
            </LinearGradient>
            <br></br> Shapes as well
          </h3>

          <div className="fifth-sec2">
            <div className="fifth-sec3">
              <img src="/images/ca-icon-1.png"></img>
              <h5>Excellent Support</h5>
              <p>
                We are passionate about empowering creatives with the tools they
                need to bring their vision to life{" "}
              </p>
            </div>
            <div className="fifth-sec3">
              <img src="/images/ca-icon-2.png"></img>
              <h5>Reliable Expert</h5>
              <p>
                We are passionate about empowering creatives with the tools they
                need to bring their vision to life{" "}
              </p>
            </div>
            <div className="fifth-sec3">
              <img src="/images/ca-icon-3.png"></img>
              <h5>Unique Technology</h5>
              <p>
                We are passionate about empowering creatives with the tools they
                need to bring their vision to life{" "}
              </p>
            </div>
            <div className="fifth-sec3">
              <img src="/images/ca-icon-4.png"></img>
              <h5>High Image Quality</h5>
              <p>
                We are passionate about empowering creatives with the tools they
                need to bring their vision to life{" "}
              </p>
            </div>
          </div>
        </Container>

        <div className="fifth-sec4">
          <Slider {...settings3}>
            <h2>Take Your Visuals to the next level using Bot</h2>

            <h2>
              <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
                Take Your Visuals to the next level using Bot
              </LinearGradient>
            </h2>
            {/* <img src='https://writebot-react.themetags.net/img/icon-star-outline.png'></img>
              <h2>Take using AI images</h2> */}
          </Slider>
        </div>
      </div>

      <div className="sixth-section">
        <Container>
          <h3>
            What{" "}
            <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
              {" "}
              Creatives{" "}
            </LinearGradient>
            People Are
            <br /> Saying About Us
          </h3>

          <Slider {...settings4}>
            {data.map((testimonial) => (
              <div key={testimonial.id} className="sixth-sec1">
                <div className="sixth-sec1-img">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.message}</p>
              </div>
            ))}
          </Slider>
        </Container>
      </div>

      <Plans></Plans>
      <Footer></Footer>
    </div>
  );
};

export default Mainpage;
