'use client'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy data for the slideshow
  const slides = [
    'https://via.placeholder.com/400x200?text=Slide%201',
    'https://via.placeholder.com/400x200?text=Slide%202',
    'https://via.placeholder.com/400x200?text=Slide%203',
    'https://via.placeholder.com/400x200?text=Slide%204',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/images/ARTCHIVE.png" alt="Our Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="artist/category" />
          <button type="submit">Search</button>
        </div>
        <div className="centered-element">
          <h1>THE ARTCHIVE</h1>
        </div>
        <button className="login-btn">LOG IN</button>
      </header>

      {/* Slideshow */}
      <div className="slideshow">
        <button className="slide-btn prev-btn" onClick={handlePrevSlide}>{'<'}</button>
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slide-img" />
        <button className="slide-btn next-btn" onClick={handleNextSlide}>{'>'}</button>
      </div>

      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((slide, index) => (
          <div key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`} />
        ))}
      </div>

      {/* Discover section */}
      <div className="discover-container">
        <div className="oval"></div>
        <h2>DISCOVER</h2>
      </div>

      {/* Four cards */}
      <div className="cards">
        {[1, 2, 3, 4].map((cardNumber) => (
          <div key={cardNumber} className="card">
            <h3>Card {cardNumber}</h3>
            <p>Description of Card {cardNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
