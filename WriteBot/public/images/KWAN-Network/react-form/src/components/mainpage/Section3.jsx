import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { LinearGradient } from "react-text-gradients";
import './Section3.css'

const Section3 = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
  return (
    <div className="third-section">
    <Container>

    <h4 className="text-center">
    We Worked With Global Largest
               <LinearGradient gradient={["to left", "#17acff ,#e7005c"]}>
                2500+ Brands
              </LinearGradient>
            </h4>


    <Slider {...settings} style={{margintop:"0px"}}>

      <div className="slider-element">
        <img src="images/brand-icon-1.png"></img>
      </div>

      
      <div className="slider-element">
      <img src="images/brand-icon-6.png"></img>

      </div>
      <div className="slider-element">
      <img src="images/brand-icon-12.png"></img>

      </div>
      <div className="slider-element">
      <img src="images/brand-icon-3.png"></img>

      </div>
      <div className="slider-element">
      <img src="images/brand-icon-12.png"></img>

      </div>

      <div className="slider-element">
      <img src="images/brand-icon-6.png"></img>

      </div>
      
    </Slider>

<div className="slider-2">
    <Slider {...settings2}>

      <div className="slider-element">
        <img src="https://writebot-react.themetags.net/img/brand-icon-1.png"></img>
      </div>
      <div className="slider-element">
      <img src="https://writebot-react.themetags.net/img/brand-icon-12.png"></img>

      </div>
      
      <div className="slider-element">
      <img src="https://writebot-react.themetags.net/img/brand-icon-6.png"></img>

      </div>
      
      <div className="slider-element">
      <img src="https://writebot-react.themetags.net/img/brand-icon-3.png"></img>

      </div>
      <div className="slider-element">
      <img src="https://writebot-react.themetags.net/img/brand-icon-12.png"></img>

      </div>

      <div className="slider-element">
      <img src="https://writebot-react.themetags.net/img/brand-icon-6.png"></img>

      </div>
      
    </Slider></div>
    </Container>
    </div>
  );
}

export default Section3;