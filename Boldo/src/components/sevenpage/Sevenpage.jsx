
import "./Sevenpage.css";
import { Link } from "react-router-dom";

const Sevenpage = () => {
  return (
    <section className="sevenpage">
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: "50px" }}
        >
          <div className="services">
            <div className="d-flex justify-content-center">
              <div className="our-services d-flex align-items-center justify-content-center">
                <p>Our Blog</p>
              </div>
            </div>

            <h2 className="para-services">
              Value proposition accelerator product management venture
            </h2>
          </div>
        </div>

        <div className=" d-flex align-items-center justify-content-center">
          <div className="seven-content1">
            <div className="row">
              <div className="col-sm-4 col-4">
                <div className="card border border-0">
                  <div className="card-body m-0 p-0 seven-body">
                    <img
                      src="./images/Rectangle1 1270.png"
                      className="seven-image"
                      height={209}
                      width={298}
                    ></img>
                    <div className="seven-para">
                      <div className="seven-para1">
                        <h4 className="seven-para3">
                          <b>Category</b>
                        </h4>
                        <h6 className="seven-para4">November 22, 2021</h6>
                      </div>

                      <p className="seven-para2">
                        Pitch termsheet backing validation focus release.
                      </p>

                      <div className="seven-para5">
                        <img
                          src="./images/Ellipse3 10.png"
                          height={32}
                          width={32}
                        ></img>
                        <h6 className="seven-para6">Chandler Bing</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-4">
                <div className="card border border-0">
                  <div className="card-body m-0 p-0 seven-body">
                    <img
                      src="./images/Rectangle2 1270.png"
                      className="seven-image"
                      height={209}
                      width={298}
                    ></img>
                    <div className="seven-para">
                      <div className="seven-para1">
                        <h4 className="seven-para3">
                          <b>Category</b>
                        </h4>
                        <h6 className="seven-para4">November 22, 2021</h6>
                      </div>

                      <p className="seven-para2">
                        Seed round direct mailing non-disclosure agreement
                        graphical user interface rockstar.
                      </p>

                      <div className="seven-para5">
                        <img
                          src="./images/Ellipse2 10.png"
                          height={32}
                          width={32}
                        ></img>
                        <h6 className="seven-para6">Rachel Green</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-4">
                <div className="card border border-0">
                  <div className="card-body m-0 p-0 seven-body">
                    <img
                      src="./images/Rectangle3 1270.png"
                      className="seven-image"
                      height={209}
                      width={298}
                    ></img>

                    <div className="seven-para">
                      <div className="seven-para1">
                        <h5 className="seven-para3">
                          <b>Category</b>
                        </h5>
                        <h6 className="seven-para4">November 22, 2021</h6>
                      </div>

                      <p className="seven-para2">
                        Beta prototype sales iPad gen-z marketing network
                        effects value proposition
                      </p>

                      <div className="seven-para5">
                        <img
                          src="./images/Ellipse 10.png"
                          height={32}
                          width={32}
                        ></img>
                        <h6 className="seven-para6">Monica Geller</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "60px", width: "100%", marginTop: "84px" }}
        >
          <div>
            <button
              className="rounded-pill seven14"
              style={{ width: "219px", height: "60px" }}
            >
              <Link
                to="/"
                className="text-dark"
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Load more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sevenpage;
