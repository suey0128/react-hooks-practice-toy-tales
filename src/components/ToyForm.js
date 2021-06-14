import React, { useState } from "react";

function ToyForm({ onSubmit, toysArr }) {
  const [newToyName, newToyNameSetter] = useState("")
  const [newToyImage, newToyImageSetter] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const newToy = {
      "id": toysArr.length+1,
      "name": newToyName,
      "image": newToyImage,
      "likes": 0
    }

    fetch(`http://localhost:3001/toys`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(newToy)
    })
     .then(res => res.json())
    .then(data => console.log(data) )
    .catch(error => console.error('Error:', error))

    onSubmit(newToy)
  }

  return (
    <div className="container">
      <form onSubmit={(e)=>{submitHandler(e)}}
      className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          value = {newToyName}
          onChange = {(e) => newToyNameSetter(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value = {newToyImage}
          onChange = {(e) => newToyImageSetter(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
