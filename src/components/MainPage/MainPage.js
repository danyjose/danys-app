import React from 'react';
import { Redirect } from "@reach/router"

import './mainpage.scss';

const MainPage = ({loggedin}) => {

    if(!loggedin) {
        return <Redirect to="/login" noThrow />
    } else {
        return (
            <div className = "main-page">
                You are loggedin!!
            </div>
        )
    }
}

export default MainPage;