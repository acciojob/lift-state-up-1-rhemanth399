
import React from "react";
import './../styles/App.css';
import {useState} from 'react'
const App = () => {
  const [showModal,setshowModal]=useState(false);
  const [modalContent,setModalContent]=useState(null);
  function clickBtn(){
    
    setModalContent(
      <div>
    <h1>Modal Content</h1>
    <p>This is the modal content</p>
    </div>
    )
    setshowModal(true)
  }
  return (
    <div>
      <div><h1>Parent Component</h1>
      </div>
        <div><h1>Child Component</h1>
        <button onClick={clickBtn}>Show Modal</button>
        </div>
        {showModal&&<div className="modal">{modalContent}</div>}
    </div>
  )
}

export default App
