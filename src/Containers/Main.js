import React from 'react';
import Login  from '../components/Login/Login';
import LeftPanel  from '../components/LeftPanel/LeftPanel';


class Main extends React.Component {

    render () {
        return (
            <div>
            <LeftPanel />
            <Login />
        </div>
        )
    }
}

export default Main;