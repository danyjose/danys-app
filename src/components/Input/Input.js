import React from 'react';
import valid from  '../../Images/valid.png';
import invalid from  '../../Images/invalid.png';
import './input.scss'
const Input = ({className,isValid,hasSubmitted,type,value, ...props}) => {
    return (
        <div className="input-block">
            <input className = {className}
            type = {type}
            {...props} />
            {value && <img src={isValid ? valid : invalid}  alt="validity"></img>}
        </div>
    );
}

export default Input;