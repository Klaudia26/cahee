import React from 'react';
import './style.scss';

const Button = ({ text, className }) => {
    return <button className={`btn ${className ? className : ''}`}>{text}</button>
}

export default Button;
