import React from 'react';
import './style.css';
import FormInput from './componet/FormInput';
import { Trans, useTranslation } from 'react-i18next';

export default function App() {
  //language
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const lng = navigator.language;
  //language
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
      lable: 'Email',
    },
    {
      id: 3,
      name: 'birthay',
      type: 'text',
      placeholder: 'Birthday',
      lable: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'password',
      lable: 'Password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm Password',
      lable: 'Confirm Password',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {Inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            values={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}
