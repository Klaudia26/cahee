import React, { Component } from 'react';
import './style.scss';
import Button from '../Button';

class Subscribe extends Component {
    state = {
        subscribe: "",

    }
    handleChange = (e) => {
        this.setState({
            subscribe: e.target.value,
        })
    }
    render() {
        return (
            <section className="section-subscribe" id='subscribe'>
                <div className="subscribe-description">
                    <h2 className="heading-primary">Subscribe To Us</h2>
                    <p className="paragraph">Established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <input type="text" value={this.state.subscribe} onChange={this.handleChange} className="subscribe-input" />
                    <Button className="btn--green" text="Subscribe" />
                </div>
                <div className="picture" />

            </section>
        )
    }
}
export default Subscribe;