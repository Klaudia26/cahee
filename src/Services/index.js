import React from 'react';
import Service from './Components/Service';
import './style.scss';

const Services = () => {
    return (
        <section className="section-services flex-center" id='services'>
            <div>
                <Service text="Online Shopping" icon="fa-shopping-cart" />
                <Service text="Quality Product" icon="fa-check-square-o" />
                <Service text="Domestic & International Delivery" icon="fa-globe" />
                <Service text="Well Organized" icon="fa-calendar" />
            </div>
            <div className="picture">
                <h2 className="heading-primary heading-primary--light">Our Services</h2>
            </div>
        </section>
    );
}

export default Services;
