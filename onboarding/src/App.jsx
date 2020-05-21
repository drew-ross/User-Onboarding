import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import UserList from './components/UserList';
import formSchema from './validation/formSchema';

//Initial Values
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: ''
}


const initialDisabled = true;
const URL = 'https://reqres.in/api/users';

//
function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(URL)
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const postUser = (newUser) => {
    axios.post(URL, newUser)
      .then(res => {
        console.log('POST response: ', res)
        setUsers([res.data, ...users])
      })
      .catch(err => console.log(err))
      .finally(() => setFormValues(initialFormValues))
  }

  //Get users when the page loads
  useEffect(() => {
    getUsers();
  }, []);

  //Allow submission if form is valid
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  const onInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;

    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })

    setFormValues({ ...formValues, [name]: value });
  }

  const onCheckboxChange = e => {
    const { name } = e.target;
    const { checked } = e.target;

    yup.reach(formSchema, name)
      .validate(checked)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })

    setFormValues({ ...formValues, [name]: checked });

    setFormValues({ ...formValues, [name]: checked });
  }

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    postUser(newUser);
  }

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        disabled={disabled}
        values={formValues}
        onSubmit={onSubmit}
        errors={formErrors}
      />
      <div></div>
      <UserList users={users} />
    </div>
  );
}

export default App;
