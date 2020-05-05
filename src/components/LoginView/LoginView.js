import React, {useState}from 'react';
import { useNavigate, Link } from "@reach/router"

import Input from '../Input/Input';
import Button from '../Button/Button';
import './loginview.css';

const Login = () => {
    const [formState, setFormState] = useState({userName: "", password: "", isRemembered: false});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        console.log("handeChange",name, value);
        setFormState({
            ...formState,
            [name]: checked ? checked : value
          });
      };
      console.log(formState);
    const onLogin = (event) => {
        event.preventDefault();
        console.log(formState.userName, formState.password);
        if(formState.userName !== 'danyjose' || formState.password !== '1234') {
            setError('Username or password is incorrect!')
            setTimeout(function(){ setError(""); }, 3000);
        } else {
            setFormState({});
            navigate('/mainPage');
        }
        console.log(formState.userName,formState.password);
    }
    return(
        <div className = "login-panel">
            <h1 className = "login-header">Login</h1>
            <p>Don't have an account?
                    <Link className = "link-style" to = "/createAccount"> Create an account</Link>
                , it takes less than a minute.</p>
            <form  onSubmit = {onLogin}>
                    <p className = "login-error">{error}</p>
                    <Input className = "login-input"
                        type = 'text'
                        placeholder = 'Username'
                        value = {formState.userName}
                        name = 'userName'
                        onChange={handleChange}
                    /> 
                    <Input className = "login-input"
                        type ="Password"
                        placeholder = "Password"
                        value = {formState.password}
                        name = 'password'
                        onChange={handleChange}
                    />
                <div>
                    <div className = "login-remember-me">
                        <Input
                            name = "isRemembered"
                            type = "checkbox"
                            value = {formState.isRemembered}
                            onChange = {handleChange}
                        />
                        Remember me
                    </div>
                    <div>
                        <Link to = "/resetPassword" className = "login-forgot-pass">
                        Forgot Password?
                        </Link>
                        </div>
                </div>
                <Button className = "login-button" text = "Login"/>
            </form>
        </div>
    )

}
export default Login;