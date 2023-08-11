import React from 'react';
import './forminput.css';
const FormInput = (props) => {
  const [focused, setFocused] = React.useState(false);
  const { id, lable, errorMessage, onChange, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label htmlFor="">{lable}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
