'use client'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import FolioHeader from '../components/FolioHeader';
import Container from '../components/Container';
import UserContext from '../context/UserContext'
import PortfolioStyles from './portfolio.module.css';

const App = () => {

  const [items, setItems] = useState([]);
  const {userData, setUserData } = useContext(UserContext);
  const username = userData.user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/items/')
        setItems(response.data)
        console.log(items)
      } catch (error) {
        console.error('Error fetching items: ', error)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (items.length > 0) {
    const filtered = items.filter(item => item.uploader=username)
    console.log("FILTERED")
    console.log(filtered)}
  }, [items]);

  return (
    <div className={PortfolioStyles.page}>
      <FolioHeader />
      <Container />
    </div>
  )
}

export default App;