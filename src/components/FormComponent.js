import React, { useState } from "react";
import '../stylesheets/FormComponent.css';

function FormComponent(props){
  const [inputNumber, setInputNumber] = useState('');
  // Function to handle input changes
  const handleChange = e => {
    setInputNumber(e.target.value);
  };
  // Function to handle clicks
  const handleClick = e => {
    e.preventDefault();
    const n = parseInt(inputNumber);
    if(!isNaN(n) && Number.isInteger(n) && n > 0 ){
      props.onSubmit(n);
    }
  }

  return(
  <form 
    className='form-component'
    onSubmit={handleClick} >
    <input
      className="serie-input"
      type="text"
      placeholder="Enter a number"
      name="texto"
      onChange={handleChange}
    />
    <button className="serie-button">
      Calculate
    </button>
  </form>
  );
}

export default FormComponent;