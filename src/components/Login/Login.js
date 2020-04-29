import React from 'react';
import './Login.css';

const Login = () => {
    const OnLogin = () => {
        console.log('Test');
        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        if(userName === 'danyjose') {
            if(password == '1234') {
                alert("You are logged in!!");
            } else {
                alert("Password is in correct");
            }
        } else {
            alert("User Name is incorrect");
        }
        console.log(userName,password);
    }
    return(
        <div className = "login-panel">
            <h1 className = "login-header">Login</h1>
            <p>Don't have an account? Create an account, it takes less than a minute.</p>
            <form>
                <div>
                    <input className = "login-input"
                        type='text'
                        placeholder='Username'
                        id='userName'
                    /> 
                </div>
                <div>
                    <input className = "login-input"
                        type ="Password"
                        placeholder = "Password"
                        id="password"
                    />
                </div>
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
                <button className = "login-button" onClick = {OnLogin}>
                    Login
                </button>
            </form>
        </div>
    )

}
export default Login;