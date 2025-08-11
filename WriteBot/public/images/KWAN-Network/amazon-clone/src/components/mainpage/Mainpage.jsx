
// import React, { useState, useEffect } from 'react';
// import './Mainpage.css';
// import Maincards from './maincards/Maincards';

// const Mainpage = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetch('https://fakestoreapiserver.reactbd.com/photos');
//                 const data = await response.json();
//                 setImages(data);
//             } catch (error) {
//                 console.error('Error fetching images:', error);
//             }
//         };

//         fetchImages();
//     }, []);

//     return (
//         <div className='mainpage-container'>
//             <div className='main-nav m-0'>
//                 <div className='main-nav-a'>
//                     <div className='div-a'><a href='' className='nav-a'><i className='bi bi-list'></i></a></div>
//                     <div className='div-a'>
//                         <a class="nav-a" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">All</a>
//                         <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//                         <div class="offcanvas-header bg-dark">
//                           <h5 class="offcanvas-title nav-a" id="offcanvasExampleLabel"><i class="bi bi-person-circle"></i> Hello,Sign in</h5>
//                           <button type="button" class="btn-close btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                         </div>
//                         <div class="offcanvas-body">
//                           <div>
//                            <h5 className='my-3 font-weight-bold'>Trending</h5>  
//                            <div className='m-2'><a className='text-secondary'>New Releases</a></div>
//                             <div className='m-2'><a className='text-secondary'>Best Sellers</a></div>
//                             <div className='m-2'><a className='text-secondary'>Movies and Shakers</a></div> 
//                         </div>
//                         <div>
//                            <h5 className='my-3 font-weight-bold'>Digital Content and Devices</h5>
                         
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Echo & Alexa</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Fire TV</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Kindle E-Readers & eBooks</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Audible Audiobooks</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Prime Vedio</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Prime Music</a><i class="bi bi-chevron-right"></i></div>


                        
//                         </div>
//                         <div>
//                            <h5 className='my-3 font-weight-bold'>Shop by Category</h5>
                         
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Mobiles, Computers</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>TV,Appliances, Electronics</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Men's Fashion</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Women's Fashion</a><i class="bi bi-chevron-right"></i></div>


                         
//                           </div>

//                           <div className='my-3 font-weight-bold'>
//                            <h5>Programs & Features</h5>
                         
//                              <div className='m-2'><a className='text-secondary'>Amazon Pay</a></div>
//                              <div className='m-2'><a className='text-secondary'>Gift Cards And Mobile Recharges</a></div>
//                              <div className='m-2 d-flex justify-content-between text-secondary'><a className='text-secondary'>Amazon Lauchpad</a><i class="bi bi-chevron-right"></i></div>
//                              <div className='m-2'><a className='text-secondary'>Amazon Business</a></div>


                         
//                           </div>

//                           <div>
//                            <h5 className='my-3 font-weight-bold'>Help and Settings</h5>
                         
//                              <div className='m-2'><a className='text-secondary'>Your Account</a></div>
//                              <div className='m-2'><a className='text-secondary'>Customer Service</a></div>
//                              <div className='m-2'><a className='text-secondary'>Sign In</a></div>
                           


                         
//                           </div>
//                         </div></div></div>
//                     <div className='div-a'><a href='' className='nav-a'>Fresh</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>MX Player</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Sell</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Best Sellers</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Today's Deal</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Mobiles</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Prime</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Customer Services</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Electronics</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Home & Kitchen</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>Fashion</a></div>
//                     <div className='div-a'><a href='' className='nav-a'>New Releases</a></div>
//                      </div>
//                 <div className='great-sale'>
//                     <div>
//                         <div style={{ fontSize: "14px", fontWeight: "600" }}>GREAT INDIAN FESTIVAL</div>
//                         <div style={{ fontSize: "14px", fontWeight: "600" }}>LIVE NOW</div>
//                     </div>
//                 </div>
//             </div>

//             <div className='main-body'>
//                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                     <div className="carousel-indicators">
//                         {images.map((_, index) => (
//                             <button
//                                 key={index}
//                                 type="button"
//                                 data-bs-target="#carouselExampleCaptions"
//                                 data-bs-slide-to={index}
//                                 className={index === 0 ? 'active' : ''}
//                                 aria-current={index === 0 ? 'true' : 'false'}
//                                 aria-label={`Slide ${index + 1}`}
//                             ></button>
//                         ))}
//                     </div>
//                     <div className="carousel-inner">
//                         {images.map((image, index) => (
//                             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                                 <img src={image.url} className="d-block w-100" alt={`Slide ${index + 1}`} />
//                                 <div className="carousel-caption">
//                                     <h5></h5>
//                                     <p></p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>

//                 <Maincards />
//             </div>
//         </div>
//     );
// }

// export default Mainpage;











import React, { useState, useEffect } from 'react';
import './Mainpage.css';
import Maincards from './maincards/Maincards';
import zIndex from '@mui/material/styles/zIndex';


const Mainpage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://fakestoreapiserver.reactbd.com/photos');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);


    return (
        <div className='mainpage-container'>
<div className="main-nav navbar navbar-expand-lg navbar-dark bg-dark m-0">
  <div className="container-fluid">
    <div
      className="navbar-toggler border border-warning bg-dark text-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent2"
      aria-controls="navbarSupportedContent2"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon text-warning">
        {/* <i className="bi bi-list"></i> */}
      </span>
    </div>

    <div className="collapse navbar-collapse bg-dark text-dark" id="navbarSupportedContent2" style={{zIndex:'1'}}>
      <ul className="navbar-nav me-auto">
      {/* <li className="nav-item">

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
                         </div></div>



      </li> */}

        <li className="nav-item"><a href="#" className="nav-link">Fresh</a></li>
        <li className="nav-item"><a href="#" className="nav-link">MX Player</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Sell</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Best Sellers</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Today's Deal</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Mobiles</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Prime</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Customer Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Electronics</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Home & Kitchen</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Fashion</a></li>
        <li className="nav-item"><a href="#" className="nav-link">New Releases</a></li>
      </ul>
    </div>
  </div>
</div>


























            {/* <div className='main-nav m-0 navbar-expand-lg'>
                <div className='main-nav-a'> */}
                




                    {/* <div className='div-a'><a href='' className='nav-a'><i className='bi bi-list'></i></a></div> */}
                    {/* <div className='div-a'>
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
                        </div></div></div> */}
{/* <div class="navbar-toggler border border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-warning d-flex align-items-center justify-content-center fw-5"><i className='bi bi-list'></i> </span>
    </div> 

<div class="collapse navbar-collapse text-dark" id="navbarSupportedContent">
                  
                    <div className='div-a'><a href='' className='nav-a'>Fresh</a></div>
                    <div className='div-a'><a href='' className='nav-a'>MX Player</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Sell</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Best Sellers</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Today's Deal</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Mobiles</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Prime</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Customer Services</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Electronics</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Home & Kitchen</a></div>
                    <div className='div-a'><a href='' className='nav-a'>Fashion</a></div>
                    <div className='div-a'><a href='' className='nav-a'>New Releases</a></div>
                     </div></div> */}
                    
                {/* <div className='great-sale'>
                    <div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>GREAT INDIAN FESTIVAL</div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>LIVE NOW</div>
                    </div>
                </div> */}
            {/* </div> */}

            <div className='main-body'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image.url} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                <div className="carousel-caption">
                                    <h5></h5>
                                    <p></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div>
                    <Maincards></Maincards>
                </div>
      
               
            </div>
        </div>
    );
}

export default Mainpage;






