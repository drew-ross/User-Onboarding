import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'

//Initial Values
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}
const initialUsers = []
const initialDisabled = true;

//
function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    //axios
  }

  useEffect(() => {
    //call getUsers
  }, []);

  const onInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const onCheckboxChange = e => {
    const { name } = e.target;
    const { checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  }

  const onSubmit = e => {

  }

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        disabled={disabled}
        values={formValues}
        onSubmit={onSubmit}
        />
    </div>
  );
}

export default App;
