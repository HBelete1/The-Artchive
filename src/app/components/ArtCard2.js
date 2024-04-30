import React, { useState, useContext } from 'react'
import axios from 'axios'
import Card from "./Card";


const ArtCard2 = ({item, children}) => {

  const [enteredImage, setEnteredImage] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

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
  setEnteredImage(item.image)
  setEnteredTitle(item.title)
  setEnteredDate(item.date)
  setEnteredDescription(item.description)
  setEnteredCategory(item.category)
 
  const submitHandler = async(event) => {
    event.preventDefault()

    const folioData = {
      image: enteredImage,
      title: enteredTitle,
      date: enteredDate,
      description: enteredDescription,
      categori: enteredCategory
    }
    try {
      console.log(userData.token)
      console.log('Token 2: '+localStorage.getItem('auth-token'))
      const link = 'http://localhost:8085/api/items/portfolio:' + item.id
      const response = await axios.post(link, folioData, {headers: {'Authorization': 'Bearer '+localStorage.getItem('auth-token')}})
      console.log(response.data);
    } catch (error) {
      console.error('Error altering data:', error)
    }
  }
  return (<Card>
    <div>
      <form onSubmit = {submitHandler}>
                <div>
                    <label htmlFor='image'>Image</label>
                    <input
                        type='text'
                        value={enteredImage}
                        onChange = {imageChangeHandler}
                        id='image'
                    />
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange = {titleChangeHandler}
                        id='title'
                    />
                </div>
                <div>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        onChange = {dateChangeHandler}
                        id='date'
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        value={enteredDescription}
                        onChange = {descriptionChangeHandler}
                        id='description'
                    />
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <select
                        value={enteredCategory}
                        onChange = {categoryChangeHandler}
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
                
            <button type='submit'>Save Edits</button>
        </form>
      {children}
    </div>
  </Card>)
}

export default ArtCard2