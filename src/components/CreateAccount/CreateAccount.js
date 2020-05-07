import React, {useState} from 'react';
import { Link } from '@reach/router';
import Input from '../Input/Input';
import Button from '../Button/Button';
import valid from  '../../Images/valid.png';
import invalid from  '../../Images/invalid.png';
import './createaccount.scss';

const CreateAccount = () => {

    const [formState, setFormState] = useState({fullName: "", email: "", password: "", repeatPassword: ""});
    const [nameValidity, setNameValidity] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [repeatPasswordValidity, setRepeatPasswordValidity] = useState(false);
    const [message, setMessage] = useState('');
    const [infoClass, setInfoClass] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("handeChange",name, value);
        setFormState({
            ...formState,
            [name]: value
          });
      };
    const validate = (event) => {
        event.preventDefault();
        setHasSubmitted (true);
        console.log("formState",formState);
        const nameformat = /^[A-Za-z\s]+$/;
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const nameValidityCheck = nameformat.test(formState.fullName.trim());
        const emailValidityCheck = emailformat.test(formState.email);
        const passwordValidityCheck = formState.password.length>=6;
        const repeatPasswordValidityCheck = passwordValidityCheck && formState.repeatPassword === formState.password;

        setNameValidity(nameValidityCheck);
        setEmailValidity(emailValidityCheck);
        setPasswordValidity(passwordValidityCheck);
        setRepeatPasswordValidity(repeatPasswordValidityCheck);

        if(nameValidityCheck && emailValidityCheck && passwordValidityCheck && repeatPasswordValidityCheck) {
            setInfoClass("valid-message");
            setMessage("You have created an account");
        } else {
            setInfoClass("invalid-message");
            setMessage("Fix the issues");
        }
    }
    return(
        <div className = "create-panel">
            <h1 className = "create-header">Create An Account</h1>
            <p>Create an account it takes less than a minute. If you already have an account  
                <Link className = "link-style" to = "/login"> login</Link>.</p>
            <p className ={infoClass} >{message}</p>
            <form onSubmit = {validate}>
                <div className = "input-block">
                    <Input className = "create-input"
                        type='text'
                        placeholder='Full Name'
                        name='fullName'
                        value={formState.fullName}
                        onChange={handleChange}
                    />
                {hasSubmitted && <img src={nameValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>}
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='text'
                        placeholder='E-mail address'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                {hasSubmitted && <img src={emailValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>}
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='Password'
                        placeholder='Password, 6 characters minimum'
                        name='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                {hasSubmitted && <img src={passwordValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>}
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='Password'
                        placeholder='Repeat Password'
                        name='repeatPassword'
                        value={formState.repeatPassword}
                        onChange={handleChange}
                    />
                {hasSubmitted && <img src={repeatPasswordValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>}
                </div>
                <Button className = "create-button" text = "Create an Account">
                </Button>
            </form>
        </div>
    )

}
export default CreateAccount;
