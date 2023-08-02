import React from 'react';
import './forminput.css';
export default function LangSelector(props) {
  return (
    <select name="" id="" onChange={(e) => props.setLang(e.target.value)}>
      <option key={''}>Languages</option>
      <option key={'en'} value="en">
        English
      </option>
      <option key={'amh'} value="amh">
        አማርኛ
      </option>
    </select>
  );
}
