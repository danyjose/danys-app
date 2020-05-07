import React from 'react';
import './input.scss'
const Input = ({className, type, placeholder, id, ...props}) => {
    return (
    <input className = {className}
        type = {type}
        placeholder = {placeholder}
        {...props}
    /> 
    );
}

export default Input;