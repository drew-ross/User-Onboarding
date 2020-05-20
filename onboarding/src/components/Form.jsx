import React from 'react';

const Form = (props) => {
    return (
        <form>
            <label>Name:
                <input
                    name='username'
                    type='text'
                    value=''
                    onChange=''
                />
            </label>
            <br/>
            <label>Email:
                <input
                    name='email'
                    type='text'
                    value=''
                    onChange=''
                />
            </label>
            <br/>
            <label>Password:
                <input
                    name='password'
                    type='password'
                    value=''
                    onChange=''
                />
            </label>
            <br/>
            <label>Agree to the Terms of Service:
                <input
                    name='tos'
                    type='checkbox'
                    value=''
                    onChange=''
                />
            </label>

        </form>
    )
}

export default Form;