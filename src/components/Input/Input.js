import React from 'react';
import './input.css'
const Input = ({className, type, placeholder, id}) => {
    console.log('className',className);
    return (
    <input className = {className}
        type = {type}
        placeholder = {placeholder}
        id = {id}
    /> 
    );
}

export default Input;