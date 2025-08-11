import React, { useState, useEffect,useContext } from "react";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// import { CartContext } from './components/mainpage/CartContext.jsx';
import { CartProvider, CartContext } from './CartContext';

import { BiFontSize } from "react-icons/bi";

const Product = () => {
  const { id } = useParams();

  const [Product, setProduct] = useState();

  useEffect(() => {
    console.log(id);

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        let data = response.data;
        console.log(data);
        setProduct(data);
      } catch (error) {}
    };

    fetchProduct();
  }, [id]);

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />

      
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
                      <h5 className=" h2 text-bold pb-2">{Product.title}</h5>
                    </div>
                    <div className="m-3 ">
                      <p className="card-text pt-3 h3 text-danger">
                        $ {Product.price}<span className="text-dark">/ per item</span>
                      </p>
                    </div>

                    <div className="m-3 ">
                      <p className="card-text h4 fw-normal">{Product.description}</p>
                    </div>

                    <div className="m-3 ">
                      <p className="card-text h4">
                        Category: <span className="fw-normal">{Product.category}</span>
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
                        <div className="btn btn-lg btn-primary me-2 border rounded-0" onClick={() => addToCart(Product)}><i class="bi bi-cart4"></i> Add to Cart</div>

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

export default Product;



