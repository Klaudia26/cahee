import React from 'react';
import Button from '../Button';
import './style.scss';

const Home = () => {
    return (
        <section className="section-home flex-center" id='home'>
            <div className="home-description">
                <h2 className="heading-primary">Fresh Life</h2>
                <p className="paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <Button text="Get free now" className='btn--orange' />
            </div>
            <div className="picture" />
        </section>
    );
}
export default Home;