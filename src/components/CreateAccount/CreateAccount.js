import React from 'react';
import { Link } from '@reach/router';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './createaccount.css';

const CreateAccount = () => {
    return(
        <div className = "create-panel">
            <h1 className = "create-header">Create An Account</h1>
            <p>Create an account it takes less than a minute. If you already have an account  
                <Link className = "link-style" to = "/"> login</Link>.</p>
            <form>
                <Input className = "create-input"
                    type='text'
                    placeholder='Full Name'
                />
                <Input className = "create-input"
                    type='text'
                    placeholder='E-mail address'
                />
                <Input className = "create-input"
                    type='Password'
                    placeholder='Password'
                />
                <inpInputut className = "create-input"
                    type='Password'
                    placeholder='Repeat Password'
                />
                <Button className = "create-button" text = "Create an Account">
                </Button>
            </form>
        </div>
    )

}
export default CreateAccount;
