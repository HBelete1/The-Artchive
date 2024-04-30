import React from 'react';
import ArtCard from './ArtCard';
import ArtCard2 from './ArtCard2'
import '../portfolio/style.css';
import axios from 'axios';

const Container = ({ items }) => {
    

    

    const handleDelete = (id) => {
        axios.delete('http://localhost:8085/api/items/portfolio/' + id, {headers: { 'Authorization': 'Bearer: ' + localStorage.getItem('auth-token')}});
        
    window.location.reload()
    }
    return (
        <div className="cards">
            <style>{'body {background-color: #d9d9d9;}'}</style>
            <a href='/uploadPage'>Upload</a>
            {items.map((item) => (
            <ArtCard2 key={item._id} item={item}>
                <button onClick={() => {handleDelete(item._id)}}>Delete</button>
            </ArtCard2>
            
          ))}
       
        </div>
    );
};

export default Container;
