import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import TextField from '../form-inputs/form-input.component';
import './sign-in.styles.scss'

const SignIn = () => {
    // Hooks for managing state of form text-fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState(0);

    function handleSubmit() {
        alert(`Email: ${email} Password: ${password} Number: ${number}`)
    }

    return (
        <div className="container">
            <div className='sign-in'>
                <h1 className="title">Sign In</h1>
                <form className='form' action="" onSubmit={handleSubmit}>

                    <TextField label='Email' placeholder='email' type='email' onChange={setEmail} />
                    <TextField label='Password' placeholder='password' type='password' onChange={setPassword} />


                    <br />
                    {/* Testing all functions well. */}
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        </div>
    );
};


export default SignIn;