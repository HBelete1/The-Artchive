import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search artist/category" />
        <button type="submit">Search</button>
      </div>
      <div className="centered-element">
        <h1>THE ARTCHIVE</h1>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
