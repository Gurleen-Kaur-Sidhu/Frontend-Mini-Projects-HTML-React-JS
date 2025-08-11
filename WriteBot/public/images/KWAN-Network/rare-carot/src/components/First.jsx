// import React, { useState } from "react";
// import "./First.css";

// const First = () => {
//   const [mainImage, setMainImage] = useState(
//     "https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg"
//   );

//   const images = [
//     "https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg",
//     "https://media.rarecarat.com/images/2_53_31-RC100-4WE_1_12410071821.jpeg",
//     "https://media.rarecarat.com/images/2_56_SDC10035-4YE_1_12408290424.jpeg",
//     "https://media.rarecarat.com/images/2_53_31-RC100-4WE_1_12410071821.jpeg",
//     "https://media.rarecarat.com/images/2_56_SDC10035-4YE_1_12408290424.jpeg",
//   ];

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   return (
//     <div>
//       <div className="first-div">
//         <div className="second-div">
//           <div
//             style={{
//               height: "500px",
//               width: "500px",
//               border: "2px solid rgb(174, 176, 178)",
//             }}
//           >
//             <img
//               className="main-img"
//               src={mainImage}
//               style={{ height: "100%", width: "100%" }}
//               alt="Main"
//             />
//           </div>
//           <div>
//             <div className="fifth-div">
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className="fourth-div"
//                   onClick={() => handleThumbnailClick(image)}
//                 >
//                   <img 
//                     src={image}
//                     style={{ height: "100%", width: "100%"}}
//                     alt={`Thumbnail ${index + 1}`}
                  
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="third-div">
//           <div style={{ height: "500px", width: "500px", margin: "30px" }}>
//             <h1 style={{ fontSize: "28px", lineHeight: "35px" }}>
//               1.13 Carat Round Lab Diamond
//             </h1>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#484848",
//                 marginBottom: "10px",
//               }}
//             >
//               Rare Carat Ideal Cut · I Color · VVS2 Clarity · IGI Certified
//             </p>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "#484848",
//                 marginBottom: "10px",
//               }}
//             >
//               Wholesaler Direct (Sunset Gems)
//             </p>
//             <hr></hr>
//             <span style={{ fontSize: "20px", color: "#484848" }}>
//               <b>$946</b>
//             </span>
//             <span className="ms-3">
//               <a href="">Financing options</a>
//             </span><br></br>
//             <span>
//             <button type="button" class="btn mt-3 rounded-pill" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover" style={{backgroundColor:"rgb(207, 223, 240)",color:"blue"}}>
// Great price
// </button>
//             </span>
//             <span>
//             <button type="button" class="btn mt-3 rounded-pill" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover" style={{backgroundColor:"rgb(207, 223, 240)",color:"blue",marginLeft:"20px"}}>
// 18/18 Quality
// </button>
//             </span><br></br>
//             <button
//               className="block btn btn-lg w-75 text-light bg-primary"
//               style={{ marginBottom: "20px", marginTop: "20px" }}
//             >
//               Choose this Diamond
//             </button>

//             <div className="six-div">
//               <div>
//                 <i class="bi bi-truck" style={{ marginRight: "10px" }}></i>
//               </div>
//               <div className="seven-div">
//                 Free insured shipping by <b>Monday, Oct 21</b> if you order in
//                 the next 10 hours. <a href="">Need it sooner?</a>{" "}
//               </div>
//             </div>
//             <div className="six-div">
//               <div>
//                 <i
//                   class="bi bi-calendar-check"
//                   style={{ marginRight: "10px" }}
//                 ></i>
//               </div>
//               <div className="seven-div">
//                 Free 30 Day Returns, Free Resizing. Free Lifetime Warranty.
//               </div>
//             </div>
//             <div className="six-div">
//               <div>
//                 <i class="bi bi-file-lock" style={{ marginRight: "10px" }}></i>
//               </div>
//               <div className="seven-div">
//                 {" "}
//                 We inspect & verify authenticity before shipping.{" "}
//                 <b>100% Money-Back Guarantee.</b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First;


import React, { useState } from "react";
import ImageZoom from 'react-image-zooom'; 
import { MapInteractionCSS } from "react-map-interaction"; 
import "./First.css";

const First = () => {
  const [mainImage, setMainImage] = useState(
    "https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg"
  );

  const images = [
    "https://media.rarecarat.com/images/2_54_RC9903ENR-14KW_1_22403060438.jpeg",
    "https://media.rarecarat.com/images/2_53_31-RC100-4WE_1_12410071821.jpeg",
    "https://media.rarecarat.com/images/2_56_SDC10035-4YE_1_12408290424.jpeg",
    "https://media.rarecarat.com/images/2_54_RC9903ENR-14KY_1_32404181202.jpeg",
    "https://media.rarecarat.com/images/2_54_RC9903ENR-14KY_1_12404181202.jpeg",
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <div className="first-div">
        <div className="second-div">
          <div className="mydiv"
            // style={{
            //   height: "500px",
            //   width: "500px",
            //   border: "2px solid rgb(174, 176, 178)",
            
            // }}
          >
            {mainImage === images[0] ? (
              <MapInteractionCSS
                showControls
                style={{ height: "100%", width: "100%",
                  overflow: "hidden",}}
                defaultValue={{
                  scale: 1,
                  translation: { x: 0, y: 0 },
                }}
                minScale={0.2}
                maxScale={1}
                // translationBounds={{
                //   xMax: 0,
                //   yMax: 0,
                //   xMin:0,
                //   yMin:0
                // }}
              >
                <img className="myimg"
                  src={mainImage}
                  alt="Main"
                  // style={{ height: "100%", width: "100%" }}
                />
              </MapInteractionCSS>
            ) : (
              <ImageZoom className='myimg2'
                src={mainImage}
                alt="Main"
                zoom={300}
                // style={{ height: "100%", width: "100%" }}
              />
            )}
          </div>
          <div>
            <div className="fifth-div">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="fourth-div"
                  onClick={() => handleThumbnailClick(image)}
                  style={{
                          border: mainImage === image ? '2px solid blue' : 'none',
                        }}
                >
                  <img className="myimg3"
                    src={image}
                    // style={{ height: "100%", width: "100%" }}
                    alt={`Thumbnail ${index + 1}`} 

                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="third-div">
          <div className="mydiv2" >
            <h1 className='mydiv3' >
              1.13 Carat Round Lab Diamond
            </h1>
            <p className="mydiv4"
              
            >
              Rare Carat Ideal Cut · I Color · VVS2 Clarity · IGI Certified
            </p>
            <p className="mydiv5"
              
            >
              Wholesaler Direct (Sunset Gems)
            </p>
            <hr />
            <span className="mydiv6">
              <b>$946</b>
            </span>
            <span className="ms-3">
              <a href="">Financing options</a>
            </span>
            <br />
            <span>
              <button type="button" className="btn mt-3 rounded-pill button1" style={{ backgroundColor: "rgb(207, 223, 240)", color: "blue" }}>
                Great price
              </button>
            </span>
            <span>
              <button type="button" className="btn mt-3 rounded-pill" style={{ backgroundColor: "rgb(207, 223, 240)", color: "blue", marginLeft: "20px" }}>
                18/18 Quality
              </button>
            </span>
            <br />
            <button
              className="block btn btn-lg w-75 text-light bg-primary"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              Choose this Diamond
            </button>

            <div className="six-div">
              <div>
                <i className="bi bi-truck" style={{ marginRight: "10px" }}></i>
              </div>
              <div className="seven-div">
                Free insured shipping by <b>Monday, Oct 21</b> if you order in
                the next 10 hours. <a href="">Need it sooner?</a>
              </div>
            </div>
            <div className="six-div">
              <div>
                <i className="bi bi-calendar-check" style={{ marginRight: "10px" }}></i>
              </div>
              <div className="seven-div">
                Free 30 Day Returns, Free Resizing. Free Lifetime Warranty.
              </div>
            </div>
            <div className="six-div">
              <div>
                <i className="bi bi-file-lock" style={{ marginRight: "10px" }}></i>
              </div>
              <div className="seven-div">
                We inspect & verify authenticity before shipping.{" "}
                <b>100% Money-Back Guarantee.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;





















// const [selectedTitles, setSelectedTitles] = useState([]);

//     const handleImageClick = (index, title) => {
//         alert(title);
//         setActiveIndices((prev) => {
//             if (prev.includes(index)) {
//                 // Remove title if already selected
//                 setSelectedTitles((titles) => titles.filter(t => t !== title));
//                 return prev.filter((i) => i !== index);
//             } else {
//                 // Add title if not selected
//                 setSelectedTitles((titles) => [...titles, title]);
//                 return [...prev, index];
//             }
//         });
//     };

//     return (
//         <div>
//             <div className='second1-div'>
//                 <div className='second2-div'>
//                     <div className='second3-div'>
//                         <div className='second4-div'>SHAPE</div>
//                         <div className='second5-div'>
//                             <div className="d-flex justify-content-between">
//                                 {shapes.map((shape, index) => (
//                                     <img
//                                         key={index}
//                                         src={shape.src}
//                                         alt={shape.title}
//                                         className={`shape-image ${activeIndices.includes(index) ? 'active' : ''}`}
//                                         onClick={() => handleImageClick(index, shape.title)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <h3>Selected Shapes:</h3>
//                 <ul>
//                     {selectedTitles.map((title, idx) => (
//                         <li key={idx}>{title}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ShapeSelector;