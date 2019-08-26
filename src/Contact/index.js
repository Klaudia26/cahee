import React, { Component } from 'react';
import './style.scss';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <section className="section-contact" id='contact' >
                <h2 className='heading-primary'>Contact</h2>
                <p className='paragraph'>For new projectsideas business or anything you'd like to discuss with me!</p>
                <div className='form-box'>
                    <form className="contact-form">
                        <input className="contact-input" name="name" type="text" value={this.state.name} placeholder='Name' onChange={this.handleChange} />
                        <input className="contact-input" name="email" type="email" value={this.state.email} placeholder='Your Emial...' onChange={this.handleChange} />
                        <input className="contact-input" name="phone" type="tel" value={this.state.phone} placeholder='Your Phone Number...' onChange={this.handleChange} />
                        <textarea className="contact-input" name="message" value={this.state.message} placeholder='Your Message...' onChange={this.handleChange} />
                    </form>
                    <address className="adress-contact">
                        Company: Cahee
                        <br></br>
                        Address: Street 90, NN-9999 London UK
                    </address>
                </div>
            </section>
        );
    }
}

export default Contact;
