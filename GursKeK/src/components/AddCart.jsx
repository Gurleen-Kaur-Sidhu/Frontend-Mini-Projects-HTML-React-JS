import React from "react";
import { Container, Button } from "react-bootstrap";
import './Product.css'
import Footer from "./Footer";
import TopNav from "./TopNav";

const AddCart = () => {
  const cartItems = [
    {
      name: "Chocolate Cake",
      description: "Rich Chocolate + Hazelnut",
      price: "Rs. 500",
      imageUrl: "/cake 11.png",
      quantity: 2,
    },
    {
      name: "Strawberry Cake",
      description: "Strawberry + Cream Cheese",
      price: "Rs. 600",
      imageUrl: "/cake10.png",
      quantity: 1,
    },
    {
      name: "Roseberry Brownie",
      description: "Rose + Vanilla",
      price: "Rs. 100",
      imageUrl: "/cake8.png",
      quantity: 3,
    },
    
  ];

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseInt(item.price.replace('Rs. ', '')) * item.quantity,
      0
    );
  };

  return (
   <>
       <TopNav></TopNav>
    <section className="cartpage-section">
      <div className="fifth-section">
        <Container>
          <div>
            <h4 className="mb-0">Your Cart</h4>
            <h2>SHOPPING CART</h2>

            <div className="productspage-div mt-5">
              {cartItems.map((item, index) => (
                <div className="w-100 mx-4 cake-card p-3" key={index}>
                  <div className="cake-product">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>

                  <h6 className="mt-2 mb-0">{item.name}</h6>
                  <p className="text-center py-1 m-0">{item.description}</p>
                  <h4>{item.price}</h4>
                  <p className="text-center py-1 m-0">Quantity: {item.quantity}</p>
                  <Button className="w-100 py-1">REMOVE</Button>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <h2>Total: Rs. {calculateTotalPrice()}</h2>
            </div>

            <div className="text-center mt-5">
              <Button className="p-2 px-3 rounded-pill">Proceed to Checkout</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default AddCart;
