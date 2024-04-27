'use client'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import './App.css';
import { useRouter } from 'next/navigation';
import UserContext from './context/UserContext'


const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);

  // Dummy data for the slideshow
  const slides = [
    'https://via.placeholder.com/400x200?text=Slide%201',
    'https://via.placeholder.com/400x200?text=Slide%202',
    'https://via.placeholder.com/400x200?text=Slide%203',
    'https://via.placeholder.com/400x200?text=Slide%204',
  ];

  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/items/');
        console.log(response.data);
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchData();
  }, []);

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

  /*const items = [
    { title: 'Card 1', description: 'Description of Card 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsx3oh-U5UuHrsYJzxvJa4ooMbIDP8in_jQ&s',width: 100, 
    height: 200 },
    { title: 'Card 2', description: 'Description of Card 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsx3oh-U5UuHrsYJzxvJa4ooMbIDP8in_jQ&s'},
    { title: 'Card 3', description: 'Description of Card 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsx3oh-U5UuHrsYJzxvJa4ooMbIDP8in_jQ&s',width: 100, 
    height: 200 },
    { title: 'Card 4', description: 'Description of Card 4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsx3oh-U5UuHrsYJzxvJa4ooMbIDP8in_jQ&s' }
  ];*/

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
            <div key={item._id} className="card">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
            </div>
          ))}
        
      </div>
   
    </div>  
  );
}

export default App;