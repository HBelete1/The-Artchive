'use client'
import React, { useState } from "react";
import Link from 'next/link';
import Card from "../components/Card";
import "./styles.css";

const App = (props) => {
  const [enteredImage, setEnteredImage] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const folioData = {
      image: enteredImage,
      name: enteredName,
      title: enteredTitle,
      date: enteredDate
    };

    console.log(folioData);
    setEnteredImage('');
    setEnteredName('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <div className="return">
    <Link href = '/portfolio' class='link'>Return to portfolio</Link>
    <Card className="upload">  
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
      <div className='new-expense__control'>
          <label>Image</label>
          <input
            type='text'
            value={enteredImage}
            onChange={imageChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Name</label>
          <input 
            type='text' 
            value={enteredName} 
            onChange={nameChangeHandler} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
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