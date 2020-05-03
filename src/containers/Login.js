import React from 'react';
import LoginView  from '../components/LoginView/LoginView';
import LeftPanel  from '../components/LeftPanel/LeftPanel';


class Main extends React.Component {

    render () {
        return (
            <div>
            <LeftPanel />
            <LoginView />
        </div>
        )
    }
}

export default Main;