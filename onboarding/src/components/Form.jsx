import React from 'react';

const Form = (props) => {

    const { onInputChange, onCheckboxChange, values, disabled, onSubmit, errors } = props;

    return (
        <form onSubmit={onSubmit} className='form'>
            <h2>Add User</h2>
            <div className='container'>
                <label><div>First Name:</div>
                    <input
                        name='first_name'
                        type='text'
                        value={values.first_name}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <label><div>Last Name:</div>
                    <input
                        name='last_name'
                        type='text'
                        value={values.last_name}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <label><div>Email:</div>
                    <input
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <label><div>Password:</div>
                    <input
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <label><div>Agree to the Terms of Service:</div>
                    <input
                        name='tos'
                        type='checkbox'
                        checked={values.tos}
                        onChange={onCheckboxChange}
                    />
                </label>
                <br />
                <button disabled={disabled} className='button-submit'>Submit</button>
                <div className='errors'>
                    <p>{errors.first_name}</p>
                    <p>{errors.last_name}</p>
                    <p>{errors.email}</p>
                    <p>{errors.password}</p>
                    <p>{errors.tos}</p>
                </div>
            </div>
        </form>
    )
}

export default Form;