import React from 'react';
import './style.css';
import FormInput from './componet/FormInput';
export default function App() {
  return (
    <div className="app">
      <form action="">
        <FormInput placeholder="username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="sth" />
      </form>
    </div>
  );
}
