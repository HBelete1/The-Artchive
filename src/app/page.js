'use client'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import './App.css';
import { useRouter } from 'next/navigation';
import UserContext from './context/UserContext'
import ArtCard from './components/ArtCard'


const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);
  const [slides, setSlides] = useState([]);
  // Dummy data for the slideshow
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/items/');
        const fetchedItems = response.data.items;
        const itemImages = fetchedItems.map(item => item.image);
        setItems(fetchedItems);
        setSlides(itemImages);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    console.log(items); // Log items after it's updated
  }, [items]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleLogout = () => {
    // new
    setUserData({ token: undefined, user: undefined });
    localStorage.removeItem('auth-token');
    router.push('login')
  }


  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/images/ARTCHIVE.png" alt="Our Logo" />
        </div>
        
        <div className="centered-element">
          <h1>THE ARTCHIVE</h1>
        </div>
      {userData.token ? (
        <>
          <Link href="/portfolio" className="link">My Portfolio</Link>
          <button className = "link" onClick={handleLogout}>LOG OUT</button>
        </>
      ) : (
        <Link href="/login" className ='link'>LOG IN</Link>
      )}
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

      {/* Render fetched items */}
      <div className="cards">
          {items.map((item, index) => (
            <ArtCard key={item._id} item={item}/>
          ))}
        
      </div>
   
    </div>  
  );
}

export default App;