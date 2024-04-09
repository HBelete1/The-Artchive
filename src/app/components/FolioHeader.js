import React from 'react';
import Link from 'next/link';
import '../portfolio/style.css';

const Header = () => {
    return (
        <div className="nav">
            <h1>Your Artchive</h1>
            <p className ="menu">
                <a href='/'>Home</a>
            </p>
        </div>

    );
};


export default Header;


