import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = () => {
  const images = [
    'images/example.jpg',
    'images/example1.jpg',
    'images/example2.jpg'
  ];

  return (
    <div className="slideshow">
      <Slide duration={10000} transitionDuration={500}>
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <div style={{'backgroundImage': `url(${image})`}}>
              <span>Slide {index + 1}</span>
            </div>
          </div>
        ))}
      </Slide>
      <div className="slide-indicators">
        {images.map((_, index) => (
          <div key={index} className="indicator-dot"></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
