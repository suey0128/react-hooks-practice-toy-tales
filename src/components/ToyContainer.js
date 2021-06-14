import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysArr, toysArrSetter }) {

  useEffect (()=>{
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
   .then(data => {
                  // console.log(data[0].name)
                  toysArrSetter(data) })
   .catch(error => console.error('Error:', error))
  }
  
  ,[])

  return (
    <div id="toy-collection">
      {toysArr.map((toy) => <ToyCard  key={toy.id}
                                      id={toy.id}
                                      name={toy.name}
                                      image={toy.image}
                                      likes={toy.likes}
                                      toysArr={toysArr}
                                      toysArrSetter={toysArrSetter}/>
      )}
      </div>
  );
}

export default ToyContainer;
