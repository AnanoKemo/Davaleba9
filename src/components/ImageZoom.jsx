import React, { useRef } from 'react';

const ImageZoom = () => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    imageRef.current.style.transform = 'scale(1.2)';
    imageRef.current.style.transition = 'transform 0.3s ease';
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = 'scale(1)';
  };

  return (
    <div className="image-zoom">
      <img
        ref={imageRef}
        src="https://i.pinimg.com/236x/91/cd/62/91cd6255f670f3b300547561f35b0795.jpg"
        alt="Zoomable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: '300px', height: 'auto' }}
      />
    </div>
  );
};

export default ImageZoom;
