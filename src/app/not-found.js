import React from 'react';
import Link from 'next/link'
import './App.css';

function NotFound() {
    return(
        <div className="App">
            <header className="header">
                <div className="logo">
                    <img src="/images/ARTCHIVE.png" alt="Our Logo" />
                </div>
                <div className="centered-element">
                    <h1>THE ARTCHIVE</h1>
                </div>
            </header>
            <h1>Page Not Found</h1>
            <Link href='/' className="link">Return to Home</Link>
        </div>
    )
}
export default NotFound