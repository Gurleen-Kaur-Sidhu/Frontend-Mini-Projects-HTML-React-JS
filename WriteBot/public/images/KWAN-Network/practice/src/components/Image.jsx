
import React from "react";
import ImageZoom from "react-image-zooom";
import ThreeSixty from 'react-360-view'

const Image = () => {

  const imageURL = "https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg";
  const imageURL2="https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_32403060438.jpeg";
  const imageURL3="https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_12403060437.jpeg";
  const imageURL4="https://res.cloudinary.com/rarecarat/image/upload/v1693292056/ring-box.jpg";


  const images =[
    'https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg',
    'https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_32403060438.jpeg',
    'https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_12403060437.jpeg'

  ]
  

  return (
    <div >
        <div style={{display:"flex"}}>
      <div className="" style={{display:"grid",gridTemplateColumns:"repeat(2,auto)"}}>



      <div style={{height:"456px",width:"456px",margin:"20px"}}>
        <div style={{width:"100%",border:"1px solid rgb(174, 176, 178)"}}>
        <div>
       
      <ThreeSixty
        amount={75} 
        imagePath="https://fastly-production.24c.in/webin/360" 
        // imagePath="https://media.spinshot.io/6741276/frames/420913428/0;1;frame_255.png/resize;w_573;h_573;bg_ffffff;f_inside/optimize;bg_ffffff/image"
        // images= {images}
        fileName="output_{index}.jpeg"
        spinReverse 
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
 </div>
        </div>
      </div>








      <div style={{height:"456px",width:"456px",margin:"20px"}}>
        <div style={{width:"100%",border:"1px solid rgb(174, 176, 178)"}}>
          <ImageZoom style={{height:"100%",width:"100%"}}
            src={imageURL}
            alt="Zoom-image"
            zoom="300"
            // zoomPosition='original'
          />
        </div>
      </div>
      <div style={{height:"456px",width:"456px",margin:"20px"}}>
        <div style={{width:"100%",border:"1px solid rgb(174, 176, 178)"}}>
          <ImageZoom style={{height:"100%",width:"100%"}}
            src={imageURL2}
            alt="Zoom-image"
            zoom="300"
            // zoomPosition='original'
          />
        </div>
      </div>
      <div style={{height:"456px",width:"456px",margin:"20px"}}>
        <div style={{width:"100%",border:"1px solid rgb(174, 176, 178)"}}>
          <ImageZoom style={{height:"100%",width:"100%"}}
            src={imageURL3}
            alt="Zoom-image"
            zoom="300"
            // zoomPosition='original'
          />
        </div>
      </div>
      <div style={{height:"456px",width:"456px",margin:"20px"}}>
        <div style={{width:"100%",border:"1px solid rgb(174, 176, 178)"}}>
          <ImageZoom style={{height:"100%",width:"100%"}}
            src={imageURL4}
            alt="Zoom-image"
            zoom="300"
            // zoomPosition='original'
          />
        </div>
      </div>
    </div>
 
    <div style={{width:"50%",margin:"30px"}}>
            <h1 style={{fontSize:"28px",lineHeight:"36px"}}>Linda 1.5mm Comfort Fit Engagement Ring</h1>
            <span style={{fontSize:"20px",lineHeight:"36px"}}>$430</span>
            <p style={{fontSize:"20px",lineHeight:"36px",color:"#515d6a"}}>A classic 1.5mm comfort-fit solitaire ring. It's a symbol of everlasting love and brilliance, with gently pinched, high-polished sides that ensure your enduring commitment shines.</p>
            <button className="block btn btn-lg rounded-pill w-100 text-light" style={{backgroundColor:"#1B2F42",marginBottom:"20px"}}>Choose this setting</button>
            <button className="block btn btn-lg border border-3 rounded-pill w-100 text-dark" style={{backgroundColor:"#ffffff"}}>Add to Wishlist</button>
    </div>

    
    
    </div></div>
  );
};

export default Image;

