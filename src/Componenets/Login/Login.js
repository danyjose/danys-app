import React from 'react';
import './Login.css';


const Login = () => {
    return(
        <div className = "login-panel">
            <h1>Login</h1>
            <p>Don't have an account? Create an account. It takes less than a minute.</p>
            <form>
                <input
                    type='text'
                    placeholder='Username'
                />
                <input
                    type='Password'
                    placeholder='Password'
                />
                <div>
                    <label>
                        <input
                            name="rememberMe"
                            type="checkbox"
                        />
                        Remember me
                    </label>
                </div>
                <p>Forgot Password?</p>
                <button className = "login-button">
                    Login
                </button>
            </form>
        </div>
    )

}

export default Login;