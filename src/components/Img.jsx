import React, { useState } from 'react';


function Img() {
  const [imageSrc, setImageSrc] = useState('https://www.droptaxi.in/assets/images/suv_yellow.png');

  const handleImageClick = () => {
    setImageSrc(imageSrc === 'https://www.droptaxi.in/assets/images/suv_yellow.png' 
      ? 'https://www.droptaxi.in/assets/images/suv_black.png' 
      : 'https://www.droptaxi.in/assets/images/suv_yellow.png');
  };

  return (
    <div className="App">
      <img
        src={imageSrc}
        alt="Car"
        style={{ width: '200px', height: '200px', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
    </div>
  );
}

export default Img;
