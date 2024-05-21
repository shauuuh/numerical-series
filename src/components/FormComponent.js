import React, { useState } from "react";
import '../stylesheets/FormComponent.css';

function FormComponent(props){
  const [inputNumber, setInputNumber] = useState('');

  const handleChange = e => {
    setInputNumber(e.target.value);
  };
  
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
      placeholder="Ingresa un numero"
      name="texto"
      onChange={handleChange}
    />
    <button className="serie-button">
      Calcular
    </button>
  </form>
  );
}

export default FormComponent;