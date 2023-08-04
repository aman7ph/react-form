import React from 'react';
import './forminput.css';
const FormInput = (props) => {
  const { id, lable, errorMessage, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{lable}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
