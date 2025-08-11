import React, { useState } from 'react';
import './Third.css';

const Third = () => {
    const [diamondSize, setDiamondSize] = useState(1); // Default diamond size
    const [skinTone, setSkinTone] = useState('light');
  
    // Different hand images based on skin tone
    const handImages = {
      light: 'https://rarecaratcdn1.blob.core.windows.net/assets/public/img/skin-shade-picker/hand1.png',
      medium: 'https://rarecaratcdn1.blob.core.windows.net/assets/public/img/skin-shade-picker/hand3.png',
      dark: 'https://rarecaratcdn1.blob.core.windows.net/assets/public/img/skin-shade-picker/hand5.png',
    };
  
    // Function to handle diamond size change
    const handleSizeChange = (event) => {
      setDiamondSize(event.target.value);
    };
  
    // Function to handle skin tone change
    const handleSkinToneChange = (tone) => {
      setSkinTone(tone);
    };
  
  
  return (
    <div className="diamond-visualizer" style={{height:"616px",width:"616px",border:"2px solid rgb(174, 176, 178)",objectFit:"cover",objectPosition:"50% 50%"}}>
      <div className="hand-container">
        <div>
        <img src={handImages[skinTone]} alt="Hand" className="hand-image"/></div>
        <div
          className="diamond"
          style={{
            width: `${diamondSize * 20}px`,
            height: `${diamondSize * 20}px`,
          }}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          min="0.2"
          max="5"
          step="0.1"
          value={diamondSize}
          onChange={handleSizeChange}
          className="slider"
        />
        <div className="skin-tone-selector">
          <button onClick={() => handleSkinToneChange('light')}>Light</button>
          <button onClick={() => handleSkinToneChange('medium')}>Medium</button>
          <button onClick={() => handleSkinToneChange('dark')}>Dark</button>
        </div>
        <p>Your diamond: {diamondSize} ct</p>
      </div>
    </div>

  )
}

export default Third
