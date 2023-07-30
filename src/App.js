import React from 'react';
import './style.css';
import FormInput from './componet/FormInput';

export default function App() {
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    birthay: '',
    password: '',
    confirmPassword: '',
  });

  const Inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'username',
      lable: 'username',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      lable: 'email',
    },
    {
      id: 3,
      name: 'birthay',
      type: 'text',
      placeholder: 'Birthay',
      lable: 'Birthay',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'password',
      lable: 'password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm Password',
      lable: 'confirm Password',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {Inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}
