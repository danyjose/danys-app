import React, {useState} from 'react';
import { Link } from '@reach/router';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './createaccount.scss';

const CreateAccount = () => {

    const [formState, setFormState] = useState({fullName: "", email: "", password: "", repeatPassword: ""});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    
    const nameformat = /^[A-Za-z\s]+$/;
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
          });
      };
    // const displayMessageOnSubmit = () => {

    //     const nameValidityCheck = nameformat.test(formState.fullName.trim());
    //     const emailValidityCheck = emailformat.test(formState.email);
    //     const passwordValidityCheck = formState.password.length>=6;
    //     const repeatPasswordValidityCheck = passwordValidityCheck && formState.repeatPassword === formState.password;

    //     if( nameValidityCheck && emailValidityCheck && passwordValidityCheck && repeatPasswordValidityCheck) {
    //         return <p className = "valid-message">You have created an account</p>
    //     } else {
    //         return <p className = "invalid-message">Fix the issues</p>
    //     }
    // }
    const validate = (event) => {
        event.preventDefault();
        setHasSubmitted (true);
    }
    return(
        <div className = "create-panel">
            <h1 className = "create-header">Create An Account</h1>
            <p>Create an account it takes less than a minute. If you already have an account  
                <Link className = "link-style" to = "/login"> login</Link>.</p>

            <form onSubmit = {validate}>
                <Input className = "create-input"
                    isValid = {nameformat.test(formState.fullName.trim())}
                    type='text'
                    placeholder='Full Name'
                    name='fullName'
                    value={formState.fullName}
                    onChange={handleChange}
                    hasSubmitted = {hasSubmitted}
                />
                <Input className = "create-input"
                    isValid = {emailformat.test(formState.email)}
                    type='text'
                    placeholder='E-mail address'
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                    hasSubmitted = {hasSubmitted}
                />
                <Input className = "create-input"
                    isValid={formState.password.length>=6}
                    type='Password'
                    placeholder='Password, 6 characters minimum'
                    name='password'
                    value={formState.password}
                    onChange={handleChange}
                    hasSubmitted = {hasSubmitted}
                />
                <Input className = "create-input"
                    isValid = {(formState.password.length>=6) && formState.repeatPassword === formState.password}
                    type='Password'
                    placeholder='Repeat Password'
                    name='repeatPassword'
                    value={formState.repeatPassword}
                    onChange={handleChange}
                    hasSubmitted = {hasSubmitted}
                />
                <Button className = "create-button" text = "Create an Account">
                </Button>
            </form>
        </div>
    )

}
export default CreateAccount;
