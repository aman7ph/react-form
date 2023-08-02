import React, { Suspense, useEffect } from 'react';
import './style.css';
import FormInput from './componet/FormInput';
import LangSelector from './componet/LangSelector';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  //language
  const { t, i18n } = useTranslation();
  const form_txt = t(`data`);
  const regi_txt = t(`register`);
  const subm_txt = t(`submit`);
  console.log(regi_txt);
  useEffect(() => {
    const lang = localStorage.getItem('language');
    i18n.changeLanguage(lang);
  }, []);

  const setLang = (datas) => {
    localStorage.setItem('language', datas);
    window.location.reload();
  };
  //language

  const [values, setValues] = React.useState({
    username: '',
    email: '',
    birthay: '',
    password: '',
    confirmPassword: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <LangSelector setLang={setLang} />
        <h1>{regi_txt[0].register}</h1>
        {form_txt.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            values={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>{subm_txt[0].submit}</button>
      </form>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
