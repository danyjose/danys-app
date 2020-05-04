import React from 'react';

import './leftpanel.css';
import Button from '../Button/Button';

const LeftPanel = () =>{
    return (
        <div className = "left-panel">
           <h1>Hello World</h1>
           <p>
           Epsum factorial non deposit quid pruo hic escorol. Olypian quarrels et gorilla congolium 
           </p>
           <p className = "left-socialmedia-text">
               Login with social media
           </p>
           <Button className = "left-panel-button facebook" type = "icon" />
           <Button className = "left-panel-button twitter" type = "text-icon" text = "Login with Twitter"/>
        </div>
    )

}

export default LeftPanel;