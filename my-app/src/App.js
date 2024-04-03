import React from "react";
import "./uploadPage/styles.css";

function App() {
  return (
    <div>
      <button id="go-back-btn" onClick={() => window.history.back()}>
        Go Back
      </button>
      <div className="container">
        <div className="upload-image">
          <div className="upload-box">
            <label htmlFor="artwork-image">
              <span>Upload Image</span>
              <input type="file" id="artwork-image" accept="image/*" />
            </label>
          </div>
        </div>
        <form id="artwork-form">
          <div className="form-group">
            <div className="column">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="column">
              <label htmlFor="date">Date:</label>
              <input type="text" id="date" name="date" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category">
              <option value="painting">Painting</option>
              <option value="abstract">Abstract</option>
              <option value="still-life">Still Life</option>
              <option value="pop-art">Pop Art</option>
              <option value="impressionism">Impressionism</option>
              <option value="expressionism">Expressionism</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="btn" id="submit-btn" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
