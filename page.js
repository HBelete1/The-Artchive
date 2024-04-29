'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FolioHeader from '../components/FolioHeader';
import Container from '../components/Container';
import PortfolioStyles from './portfolio.module.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items associated with the authenticated user
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/items/portfolio', {
          headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        });
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className={PortfolioStyles.page}>
      <FolioHeader />
      <Container items={items} />
    </div>
  )
}

export default App;