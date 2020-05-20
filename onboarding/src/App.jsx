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

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
