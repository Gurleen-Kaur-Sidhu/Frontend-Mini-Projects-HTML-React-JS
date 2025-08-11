import React from 'react'
import { MapInteractionCSS } from "react-map-interaction";
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import Third from './Third';
const ImageZoom = () => {


  return (

    <div className='d-flex' style={{margin:"100px 200px"}}>
    <div style={{height:"500px",width:"500px",border:"2px solid rgb(174, 176, 178)",margin:"20px"}}>
  


      <MapInteractionCSS
      showControls
      style={{height:"100%",width:"100%"}}
      defaultValue={{
        scale: 1,
        translation: { x: 0, y: 0 }
      }}
      minScale={0.2}
      maxScale={1}
      translationBounds={{
        xMax: 200,
        yMax: 200
      }}
    >
      <img style={{height:"100%",width:"100%"}}
        // src="https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg"
        src='./public/download.png'
        alt="test"
        // width="100%"
      />
    </MapInteractionCSS>






<CCarousel controls  style={{marginTop:"30px",border:"2px solid rgb(174, 176, 178)",margin:"20px"}}>
  
  <CCarouselItem>
    <div style={{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    {/* <img className="d-block w-100" src={'https://assets-rarecarat.s3.us-east-1.amazonaws.com/images/logo/lab-2.webp'} alt="slide 2" /></div> */}
    <Third></Third></div>
  </CCarouselItem>
  <CCarouselItem>
  <img className="d-block w-100" src={'https://assets-rarecarat.s3.us-east-1.amazonaws.com/images/logo/lab-2.webp'} alt="slide 2" />
  </CCarouselItem>
</CCarousel>









    </div>
    
    <div style={{height:"500px",width:"500px",margin:"20px"}}>
    <h1 style={{fontSize:"28px",lineHeight:"35px"}}>1.13 Carat Round Lab Diamond 
    </h1>
    <p style={{fontSize:"16px",color:"#484848",marginBottom:"10px"}}>Rare Carat Ideal Cut 
    · I Color · VVS2 Clarity · IGI Certified</p>
    <span style={{fontSize:"20px",color:"#484848"}}><b>$946</b></span>
    <button className="block btn btn-lg w-100 text-light" style={{backgroundColor:"#1B2F42",marginBottom:"20px",marginTop:"20px"}}>Choose this setting</button>
    </div>
    
    
    
    </div>
  )
}

export default ImageZoom


