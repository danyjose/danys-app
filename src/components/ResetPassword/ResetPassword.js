import React from 'react';
import { Link } from '@reach/router';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ResetPassword = () => {
    return(
        <div className = "create-panel">
            <h1 className = "create-header">Reset Password</h1>
            <p>Create an account it takes less than a minute. If you already have an account.</p>
            <form>
                <Input className = "create-input"
                    type='text'
                    placeholder='Full Name'
                />
                <Button className = "reset-button" text = "Reset Password">
                </Button>
            </form>
        </div>
    )

}
export default ResetPassword;
