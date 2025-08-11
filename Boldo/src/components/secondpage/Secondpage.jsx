import React from "react";
import "./Secondpage.css";

const Secondpage = () => {
  return (
    <section className="secondpage">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="services">
            <div className="d-flex justify-content-center">
              <div className="our-services d-flex align-items-center justify-content-center">
                <p>Our Services</p>
              </div>
            </div>

            <h2 className="para-services">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div class="row" style={{marginTop:"80px"}}>
            <div class="col-sm-4 col-4">
              <div class="card border border-0">
                <div class="card-body second-body m-0 p-0">
                  <img
                    src="./images/Rectangle 1270.png"
                    class="card-img-top"
                    height={354}
                    width={300}
                    alt="..."
                  ></img>
                  <div className="card-context">
                    <div className="card-context1">
                      <h5 class="card-title second-title">Cool Feature Title</h5>
                      <p class="card-text second-text">
                        Learning curve network effects return on investment.
                      </p>
                    </div>
                    <div className="explore-more d-flex justify-content-between">
                        <div><b>Explore More</b> </div>
                        <img src="./images/arrow-right.png" height={26} width={24}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-4">
              <div class="card border border-0">
                <div class="card-body second-body m-0 p-0">
                  <img
                    src="./images/Rectangle 12700.png"
                    class="card-img-top"
                    height={354}
                    width={300}
                    alt="..."
                  ></img>
                  <div className="card-context">
                    <div className="card-context1">
                      <h5 class="card-title second-title">Even Cooler Features</h5>
                      <p class="card-text second-text">
                        Learning curve network effects return on investment.
                      </p>
                    </div>
                    <div className="explore-more d-flex justify-content-between">
                        <div><b>Explore More</b> </div>
                        <img src="./images/arrow-right.png" height={26} width={24}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-4">
              <div class="card border border-0">
                <div class="card-body second-body m-0 p-0">
                  <img
                    src="./images/Rectangle 127000.png"
                    class="card-img-top"
                    height={354}
                    width={300}
                    alt="..."
                  ></img>
                  <div className="card-context">
                    <div className="card-context1">
                      <h5 class="card-title second-title">Cool Feature Title</h5>
                      <p class="card-text second-text">
                        Learning curve network effects return on investment.
                      </p>
                    </div>
                    <div className="explore-more d-flex justify-content-between">
                        <div><b>Explore More</b> </div>
                        <img src="./images/arrow-right.png" height={26} width={24}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondpage;
