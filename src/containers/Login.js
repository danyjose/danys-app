import React from 'react';
import {Router} from '@reach/router';
import LoginView  from '../components/LoginView/LoginView';
import LeftPanel  from '../components/LeftPanel/LeftPanel';
import CreateAccount from '../components/CreateAccount/CreateAccount';
import ResetPassword from '../components/ResetPassword/ResetPassword';


const Login = ({setLoggedin}) => {

    return (
        <div>
            <LeftPanel />
            <Router>
                <LoginView setLoggedin = {setLoggedin} path = "/*"  />
                <CreateAccount path = "/createAccount" />
                <ResetPassword path = "/resetPassword" />
            </Router>
        </div>
    ) ;
}

export default Login;