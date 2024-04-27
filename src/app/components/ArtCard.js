import React from 'react';
import '../portfolio/style.css';

const ArtCard = () => {
    return (
        <div className="card">
        <img src={'https://img.artpal.com/18191/2-20-7-5-13-5-3m.jpg'} alt="mushroom" width="180" height="180"></img>
        <div className="cardinfo">
            <h4>Title:</h4>
            <h4>Description:</h4>
            <h3>Edit</h3>
            <h4>Date:</h4>
            <h4>Category:</h4>
            <h3 id="delete">Delete</h3>
        </div>
    </div>
    );
};

export default ArtCard;