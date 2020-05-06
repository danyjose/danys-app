import React, {useState} from 'react';
import { Link } from '@reach/router';
import Input from '../Input/Input';
import Button from '../Button/Button';
import valid from  '../../Images/valid.png';
import invalid from  '../../Images/invalid.png';
import './createaccount.css';

const CreateAccount = () => {

    const [formState, setFormState] = useState({fullName: "", email: "", password: "", repeatPassword: ""});
    const [nameValidity, setNameValidity] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [repeatPasswordValidity, setRepeatPasswordValidity] = useState(false);
    const [message, setMessage] = useState('');
    const [infoClass, setInfoClass] = useState('');
    let infoMessage;
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
        console.log("formState",formState);
        const nameformat = /^[A-Za-z\s]+$/;
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if(formState.fullName.trim().match(nameformat)){
        //     console.log("All letters");
        //     setNameValidity(true);
        // } else {
        //     console.log("invalid");
        //     setNameValidity(false);
        // }
        setNameValidity(formState.fullName.trim().match(nameformat));
        // if(formState.email.match(emailformat)) {
        //     console.log("valid email");
        //     setEmailValidity(true);
        // } else {
        //     console.log("ïnvalid email");
        //     setEmailValidity(false);
        // }
        setEmailValidity(formState.email.match(emailformat));
        //  if(formState.password.length>=6) {
        //     console.log("valid password");
        //     setPasswordValidity(true);
        // } else {
        //     console.log("ïnvalid password");
        //     setPasswordValidity(false);
        // }
        setPasswordValidity(formState.password.length>=6);
        // if(passwordValidity && formState.repeatPassword === formState.password) {
        //     console.log("password matches");
        //     setRepeatPasswordValidity(true);
        // } else {
        //     console.log("password does not match");
        //     setRepeatPasswordValidity(false);
        // }
        setRepeatPasswordValidity(passwordValidity && formState.repeatPassword === formState.password);
        if(nameValidity && emailValidity && passwordValidity && repeatPasswordValidity) {
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
                    <img src={nameValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='text'
                        placeholder='E-mail address'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <img src={emailValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='Password'
                        placeholder='Password, 6 characters minimum'
                        name='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                <img src={passwordValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>
                </div>
                <div className = "input-block"> 
                    <Input className = "create-input"
                        type='Password'
                        placeholder='Repeat Password'
                        name='repeatPassword'
                        value={formState.repeatPassword}
                        onChange={handleChange}
                    />
                <img src={repeatPasswordValidity ? valid : invalid} className="icon-validity"  alt="validity"></img>
                </div>
                <Button className = "create-button" text = "Create an Account">
                </Button>
            </form>
        </div>
    )

}
export default CreateAccount;
