import React, {useState}from 'react';
import { useHistory } from "react-router-dom";

import Input from '../Input/Input';
import Button from '../Button/Button';
import './loginview.css';

const Login = () => {
    const [formState, setFormState] = useState({userName: "", password: ""});
    const [error, setError] = useState('');
    let history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("handeChange",name, value);
        setFormState({
            ...formState,
            [name]: value
          });
      };
    const onLogin = (event) => {
        event.preventDefault();
        console.log(formState.userName, formState.password);
        if(formState.userName !== 'danyjose' && formState.password !== '1234') {
            setError('Usename or password is incorrect!')
            setTimeout(function(){ setError(""); }, 3000);
        } else {
            setFormState({});
            history.push('/mainPage');
        }
        console.log(formState.userName,formState.password);
    }
    return(
        <div className = "login-panel">
            <h1 className = "login-header">Login</h1>
            <p>Don't have an account? Create an account, it takes less than a minute.</p>
            <form  onSubmit = {onLogin}>
                    <p className = "login-error">{error}</p>
                    <Input className = "login-input"
                        type = 'text'
                        placeholder = 'Username'
                        id = 'userName'
                        value = {formState.userName}
                        name = 'userName'
                        onChange={handleChange}
                    /> 
                    <Input className = "login-input"
                        type ="Password"
                        placeholder = "Password"
                        id="password"
                        value = {formState.password}
                        name = 'password'
                        onChange={handleChange}
                    />
                <div>
                    <div className = "login-remember-me">
                        <Input
                            name = "rememberMe"
                            type = "checkbox"
                        />
                        Remember me
                    </div>
                    <div className = "login-forgot-pass">Forgot Password?</div>
                </div>
                <Button className = "login-button" text = "Login"/>
            </form>
        </div>
    )

}
export default Login;