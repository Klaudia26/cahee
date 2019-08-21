import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Service = ({ text, icon }) => {
    return (
        <div className="service flex-center">
            <span className="service__title">{text}</span>
            <span className="service__icon">
                <i className={`fa ${icon}`} aria-hidden="true" />
            </span>
        </div>
    )
}

export default Service;
