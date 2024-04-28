import React from 'react';
import Link from 'next/link';
import '../portfolio/style.css';
import PortfolioStyles from '../portfolio/portfolio.module.css';

const Header = () => {
    return (
        <div className={PortfolioStyles.nav}>
            <h1>Your Artchive</h1>
            <p className={PortfolioStyles.menu}>
                <a href='/'>Home</a>
            </p>
        </div>

    );
};


export default Header;


