import React from 'react';

const Button = (props) => {
    console.log("props", props, props.children);
    return (
        <button className={props.className}>{props.children}
        </button>
    )
}

export default Button;