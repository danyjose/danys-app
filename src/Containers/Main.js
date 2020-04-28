import React from 'react';
import Login  from '../Componenets/Login/Login';
import LeftPanel  from '../Componenets/LeftPanel/LeftPanel';


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