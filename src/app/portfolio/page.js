'use client'
import React from 'react';
import FolioHeader from '../components/FolioHeader';
import Container from '../components/Container';
import PortfolioStyles from './portfolio.module.css';

function App() {
  return (
    <div className={PortfolioStyles.page}>
      <FolioHeader />
      <Container />
    </div>
  )
}

export default App;