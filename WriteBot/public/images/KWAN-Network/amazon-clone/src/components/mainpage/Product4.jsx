import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import { BiFontSize } from "react-icons/bi";

const Product4 = () => {
  const { id } = useParams();

  const [Product, setProduct] = useState();

  useEffect(() => {
    console.log(id);

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${id}`
        );
        let data = response.data;
        console.log(data);
        setProduct(data);
      } catch (error) {}
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className='main-nav m-0 navbar-expand-lg'>
                <div className='main-nav-a'>
                




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
<div class="navbar-toggler border border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                     </div></div>
                    
                {/* <div className='great-sale'>
                    <div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>GREAT INDIAN FESTIVAL</div>
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>LIVE NOW</div>
                    </div>
                </div> */}
            </div>
      
      {Product ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="card p-5 border border-0 bg-light">
                  <div className="imgbar">
                    <img src={Product.image} height={'100%'} width={'100%'}></img>

                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card border border-0 bg-light mt-5">
                  <div className="card-body">
                    <div className="m-3">
                      <h5 className=" h2 text-bold pb-2">{Product.name}</h5>
                    </div>
                    <div className="m-3 ">
                      <p className="card-text pt-3 h3 text-danger">
                        $ 199<span className="text-dark">/ per item</span>
                      </p>
                    </div>

                    <div className="m-3 ">
                      <p className="card-text h4 fw-normal">Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ex! consectetur adipisicing elit. Voluptas, nam voluptatum dignissimos hic nihil et?</p>
                    </div>

                    <div className="m-3 ">
                      <p className="card-text h4">
                        Category: <span className="fw-normal">Product</span>
                      </p>
                      <p className="card-text h4">Type: <span className="fw-normal">Regular</span></p>
                    </div>

                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5>Size</h5>
                        <select class="form-select w-100">
                          <option selected>Select Size</option>
                          <option value="1">Small</option>
                          <option value="2">Medium</option>
                          <option value="3">Large</option>
                        </select>
                      </div>
                      <div>
                        {" "}
                        <h5>Quantity</h5>
                        <nav aria-label="Page navigation example">
                          <ul class="pagination justify-content-center">
                            <li class="page-item h-50">
                              <a class="page-link" href="#">
                                -
                              </a>
                            </li>

                            <li class="page-item">
                              <a class="page-link" href="#">
                                12
                              </a>
                            </li>

                            <li class="page-item">
                              <a class="page-link" href="#">
                                +
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>

                      
                    </div>

                    <div>
                        <div className="btn btn-lg btn-warning me-2 border rounded-0">Buy Now</div>
                        <div className="btn btn-lg btn-primary me-2 border rounded-0"><i class="bi bi-cart4"></i> Add to Cart</div>
                        <div className="btn btn-lg btn-light me-2 border rounded-0"><i class="bi bi-heart"></i> Save</div>

                      </div>



                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Mo product</h2>
        </>
      )}
    </div>
  );
};

export default Product4;