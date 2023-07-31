import React from 'react';
import './forminput.css';
const FormInput = (props) => {
  const { id, lable, errormessage, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{lable}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errormessage}</span>
    </div>
  );
};

export default FormInput;
