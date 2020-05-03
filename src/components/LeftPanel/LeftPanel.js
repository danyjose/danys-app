import React from 'react';

import './leftPanel.css';
import Button from '../Button/Button';
import twitter from  '../../Images/twitter.png';
import facebook from  '../../Images/facebook.png';

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
           <Button className = "left-panel-button facebook" >
                    <img className = "left-panel-icon" src={facebook} alt ='facebook' />
            </Button>
            <Button className = "left-panel-button twitter" >
                <img className = "left-panel-icon" src={twitter} alt ='twitter' />
                <span className = "left-panel-span">Login with Twitter</span>
            </Button>
        </div>
    )

}

export default LeftPanel;