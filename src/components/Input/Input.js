import React from 'react';
import './input.css'
const Input = ({className, type, placeholder, id, ...props}) => {
    return (
    <input className = {className}
        type = {type}
        placeholder = {placeholder}
        id = {id}
        {...props}
    /> 
    );
}

export default Input;