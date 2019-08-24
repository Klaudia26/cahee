import React from 'react';
import './style.scss';

const About = () => {
    return (
        <section className="section-about flex-center" id='about'>
            <div className="picture" />
            <div className="content-box">
                <h2 className="heading-primary heading-primary--light">About Us</h2>
                <p className="paragraph paragraph--light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </section>
    );
}
export default About;
