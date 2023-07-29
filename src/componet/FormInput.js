import React from 'react';
import './forminput.css';
const FormInput = (props) => {
  return (
    <div className="formInput">
      <label>Username</label>
      <input placeholder ={props.placeholder } />
    </div>
  );
};

export default FormInput;
