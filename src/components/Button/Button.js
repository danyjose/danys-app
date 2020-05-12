import React from 'react';

import './button.scss';

const Button = ({className, type, text, src}) => {
    const renderButton = () => {
        switch (type){
            case 'icon':
                return (
                    <button className={className}>
                        <img className = "button-left-icon" src={src} alt = {src}></img>
                    </button>
                )
            case 'text-icon':
                return (
                    <button className={className}>
                        <img className = "button-left-icon" src={src} alt = {src} />
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
    return renderButton();
}

export default Button;