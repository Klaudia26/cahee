import React, { Component } from 'react';
import Header from '../Header';
import About from '../About';
import Blog from '../Blog';
import Contact from '../Contact';
import Gallery from '../Gallery';
import Home from '../Home';
import Services from '../Services';
import Subscribe from '../Subscribe';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Home />
                <About />
                <Services />
                <Gallery />
                <Subscribe />
                <Blog />
                <Contact />
            </>
        )
    }
}

export default App;
