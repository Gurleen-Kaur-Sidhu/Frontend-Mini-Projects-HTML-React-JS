import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Bestseller.css'
import Card1 from './Card1'
import Card2 from './Card2'




const Bestseller = () => {
    return (
        <div className='bestseller m-0 p-0'>
            <Navbar></Navbar>
            <div className='main-nav m-0'>
                <div className='main-nav-a'>
                    <div className='div-a'><a href='' className='nav-a'><i className='bi bi-list'></i></a></div>
                    <div className='div-a'>
                        <a class="nav-a" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">All</a>


                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header bg-dark">
                                <h5 class="offcanvas-title nav-a" id="offcanvasExampleLabel"><i class="bi bi-person-circle"></i> Hello,Sign in</h5>
                                <button type="button" class="btn-close btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    <h5 className='my-3 font-weight-bold'>Trending</h5>

                                    <div className='m-2'><a className='text-secondary'>New Releases</a></div>
                                    <div className='m-2'><a className='text-secondary'>Best Sellers</a></div>
                                    <div className='m-2'><a className='text-secondary'>Movies and Shakers</a></div>


                                </div>

                                <div>
                                    <h5 className='my-3 font-weight-bold'>Digital Content and Devices</h5>

                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Echo & Alexa</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Fire TV</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Kindle E-Readers & eBooks</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Audible Audiobooks</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Prime Vedio</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Prime Music</a><i class="bi bi-chevron-right"></i></div>




                                </div>

                                <div>
                                    <h5 className='my-3 font-weight-bold'>Shop by Category</h5>

                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Mobiles, Computers</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>TV,Appliances, Electronics</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Men's Fashion</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Women's Fashion</a><i class="bi bi-chevron-right"></i></div>



                                </div>

                                <div className='my-3 font-weight-bold'>
                                    <h5>Programs & Features</h5>

                                    <div className='m-2'><a className='text-secondary'>Amazon Pay</a></div>
                                    <div className='m-2'><a className='text-secondary'>Gift Cards And Mobile Recharges</a></div>
                                    <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Lauchpad</a><i class="bi bi-chevron-right"></i></div>
                                    <div className='m-2'><a className='text-secondary'>Amazon Business</a></div>



                                </div>

                                <div>
                                    <h5 className='my-3 font-weight-bold'>Help and Settings</h5>

                                    <div className='m-2'><a className='text-secondary'>Your Account</a></div>
                                    <div className='m-2'><a className='text-secondary'>Customer Service</a></div>
                                    <div className='m-2'><a className='text-secondary'>Sign In</a></div>




                                </div>




                            </div>
                        </div>
                    </div>
                    <div className='div-a'><a href='' className='nav-a'>Fresh</a></div>
                    <div className='div-a'><a href='' className='nav-a'>MX Player</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Sell</a></div>
                    <div className='div-a'><Link to='/bestseller' className='nav-a'>Best Sellers</Link></div>
                    <div className='div-a'><a href='' className='nav-a'>Today's Deal</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Mobiles</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Prime</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Customer Services</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Electronics</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Home & Kitchen</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Fashion</a></div>
                    <div className='div-a'><a href='' className='nav-a'>New Releases</a></div>
                </div>
                <div className='great-sale'>
                    <div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>GREAT INDIAN FESTIVAL</div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>LIVE NOW</div>
                    </div>
                </div>
            </div>


             <div className='bestseller-nav'>
              <div className='d-flex align-items-center border border-bottom-1'>
                <div className='ms-4 me-4 mt-1'><a className='bestseller-a'>Bestsellers</a></div>
                <div className='mx-3 mt-1'><a className='bestseller-a'>Hot New Releases</a></div>
                <div className='mx-3 mt-1'><a className='bestseller-a'>Movers and Shakers</a></div>
                <div className='mx-3 mt-1'><a className='bestseller-a'>Most wished for</a></div>
                <div className='mx-3 mt-1'><a className='bestseller-a'>Most Gifted</a></div>


              </div>

             </div>



             <div className='ps-4 h-25'>
                <h3 className='mb-1'>Amazon Bestsellers</h3>
                <p className='' style={{fontSize:'14px'}}>Our most popular products based on sales. Updated frequently.</p>
             </div>


<div className=' d-flex mx-4 justify-content-between'>
                <div className='divbox'>
                    <h5 className='text-bold'>Any Department</h5>
                  <div> <a href=''className='text-dark'>Amazon Lauchpad</a></div> 
                  <div>  <a href='' className='text-dark'>Amazon Renewed</a></div> 
                  <div>  <a href='' className='text-dark'>Apps and Android</a></div> 
                  <div>  <a href='' className='text-dark'>Baby Products</a></div> 
                  <div>  <a href='' className='text-dark'>Beauty</a></div> 
                  <div>  <a href='' className='text-dark'>Books</a></div> 
                  <div>  <a href='' className='text-dark'>Car & Motorbike</a></div> 
                  <div>  <a href='' className='text-dark'>Electronics</a></div> 
                  <div>  <a href='' className='text-dark'>Gift Cards</a></div> 
                  <div>  <a href='' className='text-dark'>Home and Kitchen</a></div> 
                  <div>  <a href='' className='text-dark'>Jewellery</a></div> 
                  <div>  <a href='' className='text-dark'>Kindle Store</a></div> 
                  <div>  <a href='' className='text-dark'>Movies</a></div> 
                  <div>  <a href='' className='text-dark'>Music</a></div> 
                  <div>  <a href='' className='text-dark'>Watches</a></div> 
                  <div>  <a href='' className='text-dark'>Vedio Games</a></div> 
                  <div>  <a href='' className='text-dark'>Office Products</a></div> 
                  <div>  <a href='' className='text-dark'>Software</a></div> 
                  <div>  <a href='' className='text-dark'>Musical Instruments</a></div> 
                  <div>  <a href='' className='text-dark'>pet Supplies</a></div> 
                  <div>  <a href='' className='text-dark'>Wallets</a></div> 
                  <div>  <a href='' className='text-dark'>Garden</a></div> 
                  <div>  <a href='' className='text-dark'>Outdoors</a></div> 
                </div>



                <div className='itembox'>
                           <Card1></Card1>
                           <Card2></Card2>
                           <Card1></Card1>
                </div>
 </div>

             <div>
                    <hr></hr>
                    <div className='d-flex align-items-center justify-content-center'>
                    <div className=''>
                    <div className='text-center'>See Personalized Recommendations</div>
                      <div className='btn d-flex align-items-center justify-content-center my-2' style={{border:'1px solid orange',backgroundColor:'#FFCC4A'}}><a>Sign In</a></div>
                      <div className='text-center'>New Consumer? <a href='' style={{fontSize:'14px'}}>Start here</a></div>
                    </div></div>
                    <hr></hr>
                </div>


<div className=''>

    <div className='block bg-dark p-3 mt-4 text-white text-center'>Top Of Page</div>


    <div className='footer'>
        <section class="py-4 py-md-5 py-xl-8border-top" style={{backgroundColor:"#232F3E"}}>
    <div class="container overflow-hidden">
      <div class="row gy-4 gy-lg-0"  style={{display:"flex",justifyContent:"center"}}>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-4 text-light">Get to know Us</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">About Amazon</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Careers</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Press Releases</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Amazon Science</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-4 text-light">Connect with us</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Facebook</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Instagram</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">twitter</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-4 text-light">Money With  us</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Sell on Amazon</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Sell under Amazon</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Amazon Global selling</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">supply to amazon</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Become an affilate</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Fulfilment by Amazon</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Advertise your products</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Pay on Merchants</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="widget">
            <h4 class="widget-title mb-4 text-light">Let us help you</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Your Account</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Returns Centre</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">100% Purchase Protection</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="text-decoration-none text-white">Amazon App Download</a>
              </li>
              <li class="mb-0">
                <a href="#!" class="link-light text-decoration-none ">Help</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>



  </section>

  <div className='block footer-button text-center border-top border-light text-white p-3' style={{backgroundColor:"#232F3E"}}>
  
    <img src='https://hipfonts.com/wp-content/uploads/2022/11/amazon-logo-cover.png' height={"49px"} width={"114px"} alt="Logo" className='mx-5' />
   
        <div className='btn btn-outline-light mx-2 rounded-0'>English</div>
        <div className='btn btn-outline-light mx-2 rounded-0' >India</div>
    

  </div>

  <div class="bg-light py-4 py-md-5 py-xl-8 bg-dark ">
    
  </div>
      
    </div>
    </div>








        </div>
    )
}

export default Bestseller










