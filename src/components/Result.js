import React from 'react';
import '../stylesheets/Result.css';

const Result = ({ n }) => (
  <div className='input'>
    {n !== null ? n : 'Debe ingresar un número válido'}
  </div>
); 

export default Result;