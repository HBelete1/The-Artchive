'use client'
import React, { useState, useContext } from "react";
import Link from 'next/link';
import Card from "../components/Card";
import axios from 'axios';
import "./styles.css";
import { useRouter } from 'next/navigation';
import UserContext from '../context/UserContext'
import UploadPageStyles from './uploadPage.module.css'

const App = (props) => {
  const [enteredImage, setEnteredImage] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);
  
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };
  console.log("USER")
  console.log(userData.user)

  const submitHandler = async (event) => {
    event.preventDefault();

    const folioData = {
      image: enteredImage,
      title: enteredTitle,
      date: enteredDate,
      description: enteredDescription,
      category: enteredCategory,
      uploader: userData.user
    };
try {
  console.log(userData.token);
  console.log('Token 2: ' + localStorage.getItem('auth-token'))
  const response = await axios.post('http://localhost:8085/api/items/uploadPage', folioData, {headers: { 'Authorization': 'Bearer: ' + localStorage.getItem('auth-token')}});
  console.log(response.data);
    setEnteredImage('');
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredDescription('');
    setEnteredCategory('');
} catch (error) {
  console.error('Error submitting data:', error);

}
  };
    

  return (
    <div className={UploadPageStyles.page}>
    <Link href = '/portfolio' className='link'>Return to portfolio</Link>
    <Card className="upload">  
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
      <div className='new-expense__control'>
          <label htmlFor="image">Image</label>
          <input
            type='text'
            value={enteredImage}
            onChange={imageChangeHandler}
            id='image'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="title">Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            id='title'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="date">Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
            id='date'
          />
        </div>
        <div className='description'>
          <label htmlFor="description">Description</label>
          <input 
            type='text' 
            value={enteredDescription} 
            onChange={descriptionChangeHandler}
            id='description' 
          />
        </div>
        <div className='category'>
          <label htmlFor="category">Category</label>
          <select
            value={enteredCategory} 
            onChange={categoryChangeHandler} 
            id='category'
          >
          <option value="">Select Category</option>
          <option value="painting">Painting</option>
          <option value="abstract">Abstract</option>
          <option value="still-life">Still Life</option>
          <option value="pop-art">Pop Art</option>
          <option value="impressionism">Impressionism</option>
          <option value="expressionism">Expressionism</option>
          </select>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Post</button>
      </div>
    </form>
    </Card>
    </div>
  );
};

export default App;