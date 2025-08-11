
import React, { useState } from 'react';
import "./Second.css";

const Second = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [color, setColor] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [cut, setCut] = useState(0);
  const [carat, setCarat] = useState(0.15);
  const [price, setPrice] = useState(350);

  const letters = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D'];
  const products = ['S12','S11','VS2','VS1','VVS2','VVS1','IF','FL'];
  const goods = ['Good','Very Good','Excellent','Rare Carat Ideal']

  const shapes = [
    { src: "./public/images/12.png", title: "Round shape" },
    { src: "./public/images/13.png", title: "Oval shape" },
    { src: "./public/images/13.png", title: "Oval shape" },
    { src: "./public/images/14.png", title: "Cushion shape" },
    { src: "./public/images/15.png", title: "Emerald shape" },
    { src: "./public/images/16.png", title: "Pear shape" },
    { src: "./public/images/17.png", title: "Marquise shape" },
    { src: "./public/images/18.png", title: "Radiant shape" },
    { src: "./public/images/19.png", title: "Princess shape" },
    { src: "./public/images/20.png", title: "Heart shape" },
    { src: "./public/images/21.png", title: "Heart shape" },
  ];

  const handleImageClick = (index,title) => {
    alert(title);
    setActiveIndices((prev) => {
      if (prev.includes(index)) {
              return prev.filter((i) => i !== index);
      } else {
        
        return [...prev, index];
      }
    });
  };

  return (
    <div>
      <div className='second1-div'>
        <div className='second2-div'>
          <div className='second3-div'>
            <div className='second4-div'>SHAPE</div>
            <div className='second5-div'>
              <div className="d-flex justify-content-between">
                {shapes.map((shape, index) => (
                  <img
                    key={index}
                    src={shape.src}
                    alt={shape.alt}
                    className={`shape-image ${activeIndices.includes(index) ? 'active' : ''}`}
                  
                    onClick={() => handleImageClick(index,shape.title)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='second3-div'>
            <div className='second4-div'>COLOR</div>
            <div className='second5-div'>
            {/* <input type="range" value={color} onChange={(e) => setColor(e.target.value)} className="slider" style={{width:"500px",height:"2px"}}/>
                         <div className="d-flex justify-content-around text-dark mt-1">
                             <span>K</span>
                             <span>J</span>
                             <span>I</span>
                             <span>H</span>
                             <span>G</span>
                             <span>F</span>
                             <span>E</span>
                             <span>D</span>
                         </div> */}


                               
                  <input
                    type="range"
                    min={0}
                    max={8}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="slider"
       
                />
                <div className="d-flex justify-content-around text-dark mt-1">
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                color: color > index ? '#b4b4b5' : 'black', 
                                transition: 'color 0.3s' 
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>




            </div>
            </div>

  




<div className='second3-div'>
  <div className='second4-div'>CLARITY</div>
  <div>
    <input
      type="range"
      min={0}
      max={7}
      value={clarity}
      onChange={(e) => setClarity(e.target.value)}
      className="slider"
  
    />
    <div className="d-flex justify-content-around text-dark mt-1">
      {products.map((product, index) => (
        <span
          key={index}
          style={{
            color: clarity > index ? '#b4b4b5' : 'black', 
            transition: 'color 0.3s'
          }}
        >
          {product}
        </span>
      ))}
    </div>
  </div>
</div>












          <div className='second3-div'><div className='second4-div'>CARAT</div>
          <div className='second5-div'>
            <input type="range" min="0.15" max="35" step="0.01" value={carat} onChange={(e) => setCarat(parseFloat(e.target.value))} className="slider" />
                         <div className="d-flex justify-content-between textdark mt-1">
                             <input type="text" value={carat} readOnly className="border border-2 rounded p-2  text-center inputt"/>
                             <input type="text" value="35" readOnly className="border border2 rounded p-2  text-center inputt"/>
                         </div>

          </div>
          </div>
          <div className='second3-div'><div className='second4-div'>CUT</div>
          <div className='second5-div'>
          {/* <input type="range" value={cut} onChange={(e) => setCut(e.target.value)} className="slider"/> */}
                        {/* <div className="d-flex justify-content-around text-dark mt-1">
                            <span>Good</span>
                            <span>Very Good</span>
                            <span>Excellent</span>
                            <span>Rare Carat Ideal</span>
                        </div> */}

<input
                    type="range"
                    min={0}
                    max={4}
                    value={cut}
                    onChange={(e) => setCut(e.target.value)}
                    className="slider"
                    
                />
                <div className="d-flex justify-content-around text-dark mt-1">
                    {goods.map((good, index) => (
                        <span
                            key={index}
                            style={{
                                color: cut > index ? '#b4b4b5' : 'black', 
                                transition: 'color 0.3s' 
                            }}
                        >
                            {good}
                        </span>
                    ))}
                </div>
          </div>
          </div>
          <div className='second3-div'><div className='second4-div'>PRICE</div>
          <div className='second5-div'>
          <input type="range" min="350" max="4000000" value={price} onChange={(e) => setPrice(e.target.value)} className="slider"  />
                         <div className="d-flex justify-content-between text-dark mt-1">
                             <input type="text" value={`$${price}`} readOnly className="border border-2 rounded p-2 text-center input2" />
                             <input type="text" value="$4,000,000" readOnly className="border border-2 rounded p-2 text-center input2"  />
                         </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;



















