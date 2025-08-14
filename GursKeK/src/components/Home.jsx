
import "./Home.css";
import { Container, Nav,Navbar, NavLink } from "react-bootstrap";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";
const Home = () => {

    const cakes = [
        {
          name: "Chocolate Cake",
          description: "Rich Chocolate + Hazelnut",
          price: "Rs. 500",
          imageUrl: "./cake 11.png"
        },
        {
          name: "Strawberry Cake",
          description: "Strawberry + Cream Cheese",
          price: "Rs. 600",
          imageUrl: "./cake10.png"
        },
        {
          name: "Roseberry Brownie",
          description: "Rose + Vanilla",
          price: "Rs. 100",
          imageUrl: "./cake8.png"
        },
        {
          name: "Lemon Zest Cake",
          description: "Lemon + Coconut",
          price: "Rs. 550",
          imageUrl: "./New Project.png"
        }
      ];


  return (
    <>
    <TopNav></TopNav>

      <section className="second-section">
        <Container>
        <Navbar expand="lg" className="navbar p-0">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="text-light">HOME</Nav.Link>
              <Nav.Link href="#about" className="text-light">ABOUT US</Nav.Link>
              <Nav.Link href="#shop" className="text-light">SHOP FLAVOURS</Nav.Link>
              <Nav.Link href="#delivery" className="text-light">DELIVERY & PICKUP</Nav.Link>
              <Nav.Link href="#blogs" className="text-light">BLOGS</Nav.Link>
              <Nav.Link href="#contact" className="text-light">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          <div className="second-section-image">
            <img src="./cake-image.jpg"></img>
          </div>
        </Container>
      </section>

     

      <section className="third-section">
        <Container className="d-flex align-items-center justify-content-center">
          <div className="third-section-div">
            <h1>
              MAKING THE WORLDS BEST<br></br> CHEESECAKE FROM SCRATCH
            </h1>
            <h4 className="mb-0">Over 10 years</h4>
            <div className="d-flex align-items-center justify-content-evenly third-section-button py-0 my-0">
              <button className="p-2 px-3 rounded-pill d-flex align-items-center">
                ORDER ONLINE <RxDoubleArrowRight />
              </button>
              <button className="p-2 px-3 rounded-pill d-flex align-items-center">
                GET DIRECTION <RxDoubleArrowRight />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="fourth-section">
        <Container className="">
          <div className=" text-center">
            <img src="birthday.png" className="pastry-img"></img>
            <h4 className="mb-0">Welcome to GursKek</h4>

            <h2>
              HANDMADE CHEESECAKES FROM SCRATCH LOCATED IN BATHINDA DELIVERING
              NATIONWIDE.
            </h2>
            <p className="p-2">
              At Gurskek, we specialize in creating delicious cakes for every
              occasion, using only the finest ingredients. Whether you're
              craving rich, indulgent flavors or light, fluffy treats, our cakes
              are made to delight. With custom designs and flavors, we bring
              your sweet moments to life, making every celebration extra
              special. Let us craft the perfect cake that adds that perfect
              touch to your day.
            </p>

            <video
              width="100%"
              src="./cake-vedio.mp4"
              type="video/mp4"
              controls
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </section>

      <section className="fifth-section">
        <Container className="">
          <div className="">
            <h4 className="mb-0">Find your Flavour</h4>

            <h2>FEATURED CHEESECAKES</h2>

            <div className="fifth-products-div">
              {cakes.map((cake, index) => (
                <div className="w-100 cake-card p-3" key={index}>
                  <div className="cake-product">
                    <img src={cake.imageUrl} alt={cake.name} />
                  </div>

                  <h6 className="mt-2 mb-0">{cake.name}</h6>
                  <p className="text-center py-1 m-0">{cake.description}</p>
                  <h4>{cake.price}</h4>
                  <Link to='/'><button className="w-100 py-1">ADD TO CART</button></Link>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="view-buttton px-5 py-3 rounded-pill d-flex align-items-center justify-content-center">
            <Link to='/product' className="text-light text-decoration-none">  VIEW ALL <RxDoubleArrowRight /></Link>
            </button>
          </div>
        </Container>
      </section>

      <section className="sixth-section">
        <Container>
          <div>
            <h4 className="mb-0">Get your Cheesecake now</h4>

            <h2>ORDER ONLINE OR VISIT US</h2>

            <div className="d-flex align-items-center justify-content-center w-100 mt-4 visit-usdiv">
              <div className="w-100 text-center">
                <div className="location-div d-flex justify-content-center mb-3">
                  <img src="./cellphone.png" height={80}></img>
                </div>
                <div>
                  <h5>VISIT US</h5>
                  <h6>3345 Gorham Eve</h6>
                  <h6>St Louis Park 45</h6>
                  <h5>Get Directions</h5>
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center">
                <div className="third-section-button p-0">
                  <button className="p-2 px-3 rounded-pill d-flex align-items-center m-3">
                    ORDER ONLINE <RxDoubleArrowRight />
                  </button>
                  <button className="p-2 px-3 rounded-pill d-flex align-items-center m-3">
                    GET DIRECTION <RxDoubleArrowRight />
                  </button>
                </div>
              </div>

              <div className="w-100 text-center">
                <div className="location-div d-flex justify-content-center mb-3">
                  <img src="./food-truck.png" height={80}></img>
                </div>
                <div>
                  <h5>SHOP HOURS</h5>
                  <h6>Wed - Fri 12:00pm - 6:00pm</h6>
                  <h6>Saturday 9:00am - 6:00pm</h6>
                  <h5>Closed on Sunday</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

  <Footer></Footer>
    </>
  );
};

export default Home;


