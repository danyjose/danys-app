import React, {useState}from 'react';
import Button from '../Button/Button';
import { useHistory } from "react-router-dom";
import './loginView.css';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let history = useHistory();

    const onLogin = (event) => {
        event.preventDefault();
        console.log(userName, password);
        if(userName !== 'danyjose' && password !== '1234') {
            setError('Usename or password is incorrect!')
            setPassword("");
            setUserName("");
            setTimeout(function(){ setError(""); }, 3000);
        } else {
            setPassword("");
            setUserName("");
            history.push('/landingPage');
        }
        console.log(userName,password);
    }
    return(
        <div className = "login-panel">
            <h1 className = "login-header">Login</h1>
            <p>Don't have an account? Create an account, it takes less than a minute.</p>
            <form  onSubmit = {onLogin}>
                    <p className = "login-error">{error}</p>
                    <input className = "login-input"
                        type = 'text'
                        placeholder = 'Username'
                        id = 'userName'
                        value = {userName}
                        onChange={e => setUserName(e.target.value)}
                    /> 
                    <input className = "login-input"
                        type ="Password"
                        placeholder = "Password"
                        id="password"
                        value = {password}
                        onChange={e => setPassword(e.target.value)}
                    />
                <div>
                    <div className = "login-remember-me">
                        <input
                            name = "rememberMe"
                            type = "checkbox"
                        />
                        Remember me
                    </div>
                    <div className = "login-forgot-pass">Forgot Password?</div>
                </div>
                <Button className = "login-button">
                    Login
                </Button>
            </form>
        </div>
    )

}
export default Login;