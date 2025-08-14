import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import "./Homepage.css";

import Secondpage from "../components/secondpage/Secondpage.jsx";

import Fivepage from "../components/fivepage/Fivepage.jsx";
import Sevenpage from "../components/sevenpage/Sevenpage.jsx";

import Footer from "../components/footer/Footer.jsx";

import { motion } from "framer-motion";

import Test from "../assets/images/Group264.png";

const Homepage = () => {
  const slides = [
    { img: "./images/Logo.png" },
    { img: "./images/gg.png" },
    { img: "./images/Logo.png" },
    { img: "./images/gg.png" },
  ];

  const duplicatedSlides = [...slides, ...slides];

  const [contentText, setContentText] = useState(
    "We connect our customers with the best and help them keep up-and stay open"
  );

  const contentOptions = [
    "We connect our customers with the best",
    "Advisor success customer launch party",
    "Business-to-consumer long tail",
  ];

  const detailMessages = [
    "We connect our customers with the best and help them keep up-and stay open",
    "Our advisors ensure successful project launches with expert guidance.",
    "Explore innovative strategies for reaching consumers effectively.",
  ];

  const handleContentClick = (index) => {
    setContentText(detailMessages[index]);
  };

  return (
    <div>
      <div className="home-section">
        <Navbar></Navbar>

        <section className="mainpage-section">
          <div className="container">
            <div className="d-flex">
              <div className="main-content">
                <div className="main-content2">
                  <div className="main-content3">
                    <div className="main-content6 text-light">
                      <h2>
                        <div>Save time by building</div>
                        fast with Boldo Template
                      </h2>
                    </div>

                    <div className="main-content8"></div>

                    <div className="main-content7">
                      <p className="mb-0 text-light">
                        Funding handshake buyer bussiness-to-business metrics
                        iPad partnership First mover advantage innovator success
                        deployment non-disclosure
                      </p>
                    </div>
                  </div>

                  <div className="main-content4"></div>

                  <div className="main-content5">
                    <div className="main-content9 d-flex justify-content-between">
                      <button className="button2 rounded-pill">
                        Buy template
                      </button>
                      <button className="border border-2 border-light button3 rounded-pill text-light">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-div" style={{ zIndex: "1" }}>
                <img
                  src="./images/Group 256.png"
                  width={493.86}
                  height={231.9}
                ></img>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "25.76px" }}
                >
                  <img
                    src="./images/Group 299 (1).png"
                    width={192.18}
                    height={165.34}
                  ></img>
                  <img src={Test} width={261.96} height={165.34}></img>
                </div>
              </div>
            </div>

            <div className="">
              <div
                style={{
                  marginTop: "60px",
                  marginBottom: "60px",
                  height: "93px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="overflow-hidden">
                  <motion.div
                    className="d-flex"
                    animate={{
                      x: ["-100%", "0%"],
                      transition: {
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                      },
                    }}
                  >
                    {duplicatedSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${100 / slides.length}%` }}
                      >
                        <div className="d-flex flex-col items-center justify-center h-full text-6xl">
                          <img
                            src={slide.img}
                            height={40}
                            width={150}
                            style={{ marginRight: "70px" }}
                          ></img>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Secondpage></Secondpage>
      <section className="thirdpage">
        <div className="container d-flex justify-content-center">
          <div className="third-page">
            <div>
              <img src="./images/Group2 216.png" height={610} width={494}></img>
            </div>

            <div className="third-content">
              <div className="third-content1">
                <h3 className="third-content2">
                  We connent our customers with the best and help them keep
                  up-and stay open
                </h3>
                <div className="third-content3">
                  <div
                    className="third-content4"
                    style={{ marginBottom: "24px" }}
                  >
                    <img
                      src="./images/Group 210.png"
                      height={36}
                      width={36}
                    ></img>
                    <p className="third-context5">
                      we connent our customers with the best
                    </p>
                  </div>
                  <div
                    className="third-content4"
                    style={{ marginBottom: "24px" }}
                  >
                    <img
                      src="./images/Group 210.png"
                      height={36}
                      width={36}
                    ></img>
                    <p className="third-context5">
                      Advisor success customer launch party
                    </p>
                  </div>
                  <div className="third-content4">
                    <img
                      src="./images/Group 210.png"
                      height={36}
                      width={36}
                    ></img>
                    <p className="third-context5">
                      Business-to-consumer long tail
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="border rounded-pill third-button"
                  style={{ marginTop: "56px" }}
                >
                  <div className="button-third">Start Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourthpage">
        <div className="container d-flex justify-content-center">
          <div className="fourth-page">
            <div className="fourth-content">
              <h2 className="fourth-content1">{contentText}</h2>

              <div className="fourth-content2">
                {contentOptions.map((text, index) => (
                  <div
                    className="fourth-content-3 shadow"
                    key={index}
                    style={{ marginBottom: "24px" }}
                  >
                    <div className="fourth-content4">
                      <div className="fourth-img d-flex align-items-center justify-content-center">
                        <img
                          src={`./images/${
                            index === 0 ? "sun" : index === 1 ? "star" : "sun"
                          }.png`}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </div>
                      <div
                        className="fourth-content5"
                        onClick={() => handleContentClick(index)}
                      >
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="./images/Group 281.png"
                height={692}
                width={444}
                alt="Group"
              />
            </div>
          </div>
        </div>
      </section>
      <Fivepage></Fivepage>
      <section className="sixpage">
        <div className="container">
          <div className="six-content d-flex justify-content-center">
            <img src="./images/Image.png" height={403} width={1100}></img>
          </div>

          <div
            className="six-content4 d-flex justify-content-center"
            style={{ margin: "56px 0px" }}
          >
            <div className="six-content5 d-flex justify-content-between">
              <h2 className="six-content1">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h2>

              <div className="six-content2">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="collapsed six-content9"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        We connect our customers with the best?
                        <div>
                          <img
                            src="./images/Group11 210.png"
                            height={28}
                            width={28}
                          ></img>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this's accordion body. Let's
                        imagine this being filled with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="collapsed six-content9"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Android research & development rockstar?
                        <div>
                          <img
                            src="./images/Group11 210.png"
                            height={28}
                            width={28}
                          ></img>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this's accordion body. Let's
                        imagine this being filled with some actual content.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sevenpage></Sevenpage>
      <section className="eightpage">
        <div className="container">
          <div className="eight-page">
            <div className="eight-page1">
              <div className="eight-para2">
                An enterprise template to ramp up your company website
              </div>

              <div className="eight-para3">
                <div className="eight-para4">
                  {/* <button className='button-seven  rounded-pill'><input type='email' placeholder='Enter your mail'></input></button> */}
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="button-seven  rounded-pill"
                  ></input>
                  <button className="button2-seven rounded-pill">
                    <b>Start now</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
