import Navbar from "../../components/navbar/Navbar";

import Footer from "../../components/footer/Footer";
import Secondpage from "../../components/secondpage/Secondpage";
const Servicepage = () => {
  return (
    <div>
      <div className="about-section">
        <Navbar></Navbar>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "72px" }}
        >
          <div className="aboutpage-1">
            <div className="aboutpage-2">
              <div className="aboutpage-3">Services</div>
              <div className="aboutpage-4">
                We love to make great things, things that matter.
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className="aboutpage-5">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Secondpage></Secondpage>

      <section className="about6page">
        <div className="container d-flex justify-content-center">
          <div className="about6-page">
            <div className="d-flex align-items-center justify-content-center">
              <div className="about6-one">
                <div className="about6-two">
                  <div className="about6-four">Our Team</div>

                  <div className="about6-five">The leadership team</div>
                </div>

                <div className="about6-three">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                  Traction stock user experience deployment beta innovator
                  incubator focus.
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="about6-six">
                <img src="./images/11.png"></img>

                <div className="about6-seven">
                  <div className="about6-eight">Michael Scott</div>
                  <div className="about6-nine">General Manager</div>
                </div>
              </div>

              <div className="about6-six">
                <img src="./images/22.png"></img>
                <div className="about6-seven">
                  <div className="about6-eight">Dwight Schrute</div>
                  <div className="about6-nine">General Manager</div>
                </div>
              </div>

              <div className="about6-six">
                <img src="./images/33.png"></img>
                <div className="about6-seven">
                  <div className="about6-eight">Pam Beetsley</div>
                  <div className="about6-nine">General Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Servicepage;
