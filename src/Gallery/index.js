import React from 'react';
import Button from '../Button';
import './style.scss';


const Gallery = () => {
    return (
        <section className="section-gallery" id='gallery'>
            <h2 className="heading-primary">Gallery</h2>
            <p className="paragraph">Long established fact that. Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="gallery">
                <div className="pic pic--1"></div>
                <div className="pic pic--2"></div>
                <div className="pic pic--3"></div>
                <div className="pic pic--4"></div>
                <div className="pic pic--5"></div>
            </div>
            <Button text="View More" className="btn--blue" />
        </section>
    )
}
export default Gallery; 
