
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const TopNav = () => {
  return (
    <div>
       <section className="first-section">
        <Container className="d-flex align-items-center justify-content-center p-1">
          <div
            className="d-flex align-items-center justify-content-center w-75 border-left mobile-firstlocation"
            style={{ borderRight: "1px solid #491607" }}
          >
            <div className="location-div">
              <img src="./cellphone.png"></img>
            </div>
            <div>
              <h5>VISIT US</h5>
              <h6>3345 Gorham Eve</h6>
              <h6>St Louis Park 45</h6>
            </div>
          </div>

          <div className="w-75 mobile-firstdate">
            <div>
              <h5>WED-FRI & SAT</h5>
              <h6>12:00pm - 6:00pm,</h6>
              <h6>10:00pm - 2:00pm</h6>
            </div>
          </div>

        <div className="w-100 logo-div d-flex align-items-center justify-content-center">
            <img src="./Cake and Dessert.png"></img>
          </div>

          <div className="w-75 mobile-firstsearch">
            <div className="location-div">
              <img src="./searching.png"></img>
            </div>
            <div>
              <h5>SEARCH...</h5>
              <h6>search here</h6>
              <h6>what you want</h6>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center w-75 mobile-firstlocation"
            style={{ borderLeft: "1px solid #491607" }}
          >
            <div className="location-div">
              <img src="./shopping-bag.png"></img>
            </div>
            <div>
              <Link to='/cart'><h5>MY CART</h5></Link>
              <h6>Total Items: (0)</h6>
              <h6>$ 0.00</h6>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default TopNav
