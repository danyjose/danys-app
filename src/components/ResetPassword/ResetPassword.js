import React from 'react';
import { Link } from "@reach/router"

import Input from '../Input/Input';
import Button from '../Button/Button';
import './resetpassword.css';

const ResetPassword = () => {
    return(
        <div className = "create-panel">
            <h1 className = "create-header">Reset Password</h1>
            <p>We'll email you instructions on how to reset your password'.</p>
            <form>
                <Input className = "reset-email-input"
                    type='text'
                    placeholder='Enter Email Address'
                />
                <div> <Link to = "/login" className = "login-forgot-pass"> Go Back to Login </Link></div>
                <Button className = "reset-button" text = "Reset Password">
                </Button>
            </form>
        </div>
    )

}
export default ResetPassword;
