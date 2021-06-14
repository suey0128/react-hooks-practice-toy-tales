import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysArr,toysArrSetter] = useState([]);

  const onSubmit = (newToy) => {

    toysArrSetter([...toysArr, newToy])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
                            onSubmit={onSubmit}
                            toysArr = {toysArr}
                            /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toysArr = {toysArr}
      toysArrSetter = {toysArrSetter}
      />
    </>
  );
}

export default App;
