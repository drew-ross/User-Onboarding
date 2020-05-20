import React from 'react';

const Form = (props) => {

    const { onInputChange, onCheckboxChange, values } = props;

    return (
        <form>
            <label>Name:
                <input
                    name='username'
                    type='text'
                    value={values.username}
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

        </form>
    )
}

export default Form;