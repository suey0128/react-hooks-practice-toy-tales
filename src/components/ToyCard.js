import React, { useState } from "react";

function ToyCard({ id, name, image, likes, toysArr, toysArrSetter}) {

  const [likeNum, likeNumSetter] = useState(likes)

  const delHandler = (e, id) => {

      fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      })
      .catch(error => console.error('Error:', error))

    const updatedToysArr = toysArr.filter((toy) => toy.id !== id)
    toysArrSetter(updatedToysArr)
  }

  const likesHandler = (e, id) => {

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({ likes:likeNum+1 })
      })
       .then(res => res.json())
      .then(data => console.log(data) )
      .catch(error => console.error('Error:', error))
    
    
    likeNumSetter(likes + 1)
  }




  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeNum} Likes </p>
      <button 
              onClick={(e)=>likesHandler(e,id)}
      
      className="like-btn">Like {"<3"}</button>

      <button 
              onClick={(e) => {delHandler(e, id)}}
      className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
