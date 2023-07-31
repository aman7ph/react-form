import React from 'react';
import './forminput.css';
const FormInput = (props) => {
  const { id, lable, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{lable}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
