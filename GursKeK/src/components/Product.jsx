import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import './Product.css'
import { Link } from "react-router-dom";
const Product = () => {
  const cakes = [
    {
      name: "Chocolate Cake",
      description: "Rich Chocolate + Hazelnut",
      price: "Rs. 500",
      imageUrl: "/cake 11.png",
      additionalImages: ["/cake 11.png", "/cake 11.png"],
    },
    {
      name: "Strawberry Cake",
      description: "Strawberry + Cream Cheese",
      price: "Rs. 600",
      imageUrl: "/cake10.png",
      additionalImages: ["/cake10.png", "/cake10.png"],
    },
    {
      name: "Roseberry Brownie",
      description: "Rose + Vanilla",
      price: "Rs. 100",
      imageUrl: "/cake8.png",
      additionalImages: ["/cake8.png", "/cake8.png"],
    },
    {
      name: "Lemon Zest Cake",
      description: "Lemon + Coconut",
      price: "Rs. 550",
      imageUrl: "/New Project.png",
      additionalImages: ["/New Project.png", "/New Project.png"],
    },
    {
        name: "Chocolate Cake",
        description: "Rich Chocolate + Hazelnut",
        price: "Rs. 500",
        imageUrl: "/cake 11.png",
        additionalImages: ["/cake 11.png", "/cake 11.png"],
      },
      {
        name: "Strawberry Cake",
        description: "Strawberry + Cream Cheese",
        price: "Rs. 600",
        imageUrl: "/cake10.png",
        additionalImages: ["/cake10.png", "/cake10.png"],
      },
      {
        name: "Roseberry Brownie",
        description: "Rose + Vanilla",
        price: "Rs. 100",
        imageUrl: "/cake8.png",
        additionalImages: ["/cake8.png", "/cake8.png"],
      },
      {
        name: "Lemon Zest Cake",
        description: "Lemon + Coconut",
        price: "Rs. 550",
        imageUrl: "/New Project.png",
        additionalImages: ["/New Project.png", "/New Project.png"],
      },
      {
        name: "Chocolate Cake",
        description: "Rich Chocolate + Hazelnut",
        price: "Rs. 500",
        imageUrl: "/cake 11.png",
        additionalImages: ["/cake 11.png", "/cake 11.png"],
      },
      {
        name: "Strawberry Cake",
        description: "Strawberry + Cream Cheese",
        price: "Rs. 600",
        imageUrl: "/cake10.png",
        additionalImages: ["/cake10.png", "/cake10.png"],
      },
      {
        name: "Roseberry Brownie",
        description: "Rose + Vanilla",
        price: "Rs. 100",
        imageUrl: "/cake8.png",
        additionalImages: ["/cake8.png", "/cake8.png"],
      },
      {
        name: "Lemon Zest Cake",
        description: "Lemon + Coconut",
        price: "Rs. 550",
        imageUrl: "/New Project.png",
        additionalImages: ["/New Project.png", "/New Project.png"],
      },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (cake) => {
    setSelectedCake(cake);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCake(null);
  };

  const handleNextImage = () => {
    if (selectedCake && selectedCake.additionalImages.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedCake.additionalImages.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedCake && selectedCake.additionalImages.length > 0) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedCake.additionalImages.length) %
          selectedCake.additionalImages.length
      );
    }
  };

  return (
    <section className="productpage-section">
      <div className="fifth-section">
        <Container>
          <div>
            <h4 className="mb-0">Find your Flavour</h4>
            <h2>FEATURED CHEESECAKES</h2>

            <div className="productspage-div mt-5">
              {cakes.map((cake, index) => (
                <div
                  className="w-100 mx-4 cake-card p-3"
                  key={index}
                  onClick={() => handleOpenModal(cake)}
                >
                  <div className="cake-product">
                    <img src={cake.imageUrl} alt={cake.name} />
                  </div>

                  <h6 className="mt-2 mb-0">{cake.name}</h6>
                  <p className="text-center py-1 m-0">{cake.description}</p>
                  <h4>{cake.price}</h4>
                 <Link to='/cart' className="text-decoration-none"> <button className="w-100 py-1">ADD TO CART</button></Link>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>
              <h2>{selectedCake?.name}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center position-relative">
              <Button
                variant="link"
                onClick={handlePrevImage}
                className="image-nav-btn prev-btn"
              >
                &#8249;
              </Button>

              <div className="cake-modal-image shadow p-4">
                <img
                  src={`./public${selectedCake?.additionalImages[currentImageIndex]}`}
                  alt={selectedCake?.name}
                  style={{
                    width: "100%",
                    maxWidth: "240px",
                    height:"100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <Button
                variant="link"
                onClick={handleNextImage}
                className="image-nav-btn next-btn"
              >
                &#8250;
              </Button>
            </div>
            <div className="cake-modal-info mt-5 text-center">
              <h5>{selectedCake?.description}</h5>
              <h6>{selectedCake?.price}</h6>
            </div>

            <div className="text-center mt-3">
              <p style={{ fontSize: "16px", color: "#a89f91" }}>
                Indulge in the finest Gourmet cakes made with love and premium
                ingredients. Every bite takes you to a world of sweet delight.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 third-section-button">
            <button
              className="p-2 px-3 rounded-pill d-flex align-items-center m-2"
              onClick={handleCloseModal}
            >
              ClOSE
            </button>
            <button className="p-2 px-3 rounded-pill d-flex align-items-center m-2">
              ADD TO CART
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default Product;
