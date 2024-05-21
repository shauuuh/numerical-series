import React, { useState } from "react";
import FormComponent from './FormComponent';
import Result from './Result';
import SeriesCalculator from '../SeriesCalculator';

function Calculate(){
  const [numberResult, setNumberResult] = useState('');

  const calculateResult = n => {
    try { 
      const term = SeriesCalculator.getResultSerie(n); 
      setNumberResult(term);
    } catch (error) {
      console.error("Error", error.message);
      setNumberResult(null);
    }  
  }

  return(
    <>
      <FormComponent onSubmit={calculateResult}/>
      <Result n={numberResult}/>
    </>    
  );
}

export default Calculate;