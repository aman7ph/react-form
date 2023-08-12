import React from 'react';
import './forminput.css';
export default function LangSelector(props) {
  return (
    <select
      className="dmenu"
      name=""
      id=""
      onChange={(e) => props.setLang(e.target.value)}
    >
      <option key={''}>Lnguage</option>
      <option key={'en'} value="en">
        English
      </option>
      <option key={'amh'} value="amh">
        አማርኛ
      </option>
    </select>
  );
}
