import React from 'react';

import './button.css';
import twitter from  '../../Images/twitter.png';
import facebook from  '../../Images/facebook.png';

const Button = ({className, type, text}) => {
    switch (type){
        case 'icon':
            return (
                <button className={className}>
                    <img className = "button-left-icon" src={facebook} alt ='facebook'></img>
                </button>
            )
        case 'text-icon':
            return (
                <button className={className}>
                    <img className = "button-left-icon" src={twitter} alt ='twitter' />
                    <span className = "button-left-span">{text}</span>
                </button>
            )
        default :
        return (
            <button className={className}>
                {text}
            </button>
        )
    }
}

export default Button;