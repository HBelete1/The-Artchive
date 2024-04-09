import React from 'react';
import ArtCard from './ArtCard';
import './style.css';

const Container = () => {
    return (
        <div className="container">
            <style>{'body {background-color: #d9d9d9;}'}</style>
            <a href={""}>
             <button className="button">Upload</button>
            </a>
            <ArtCard></ArtCard> 
            <ArtCard></ArtCard> 
            <ArtCard></ArtCard> 
     </div>
    );
};

export default Container;