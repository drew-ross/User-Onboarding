import React from 'react';

const Form = (props) => {

    const { onInputChange, onCheckboxChange, values, disabled, onSubmit, errors } = props;

    return (
        <form onSubmit={onSubmit}>
            <div>
                <p>{errors.first_name}</p>
                <p>{errors.last_name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.tos}</p>
            </div>
            <label>First Name:
                <input
                    name='first_name'
                    type='text'
                    value={values.first_name}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Last Name:
                <input
                    name='last_name'
                    type='text'
                    value={values.last_name}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Email:
                <input
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Password:
                <input
                    name='password'
                    type='password'
                    value={values.password}
                    onChange={onInputChange}
                />
            </label>
            <br />
            <label>Agree to the Terms of Service:
                <input
                    name='tos'
                    type='checkbox'
                    checked={values.tos}
                    onChange={onCheckboxChange}
                />
            </label>
            <br />
            <button disabled={disabled} className='button-submit'>Submit</button>
        </form>
    )
}

export default Form;