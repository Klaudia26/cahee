import React from 'react';
import Item from './Components/Item';
import './style.scss';

const Header = () => {
    const items = [
        {
            label: 'Home',
            href: '#home',
        },
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Services',
            href: '#services',
        },
        {
            label: 'Subscribe',
            href: '#subscribe',
        },
        {
            label: 'Gallery',
            href: '#gallery',
        },
        {
            label: 'Blog',
            href: '#blog',
        },
        {
            label: 'Contact',
            href: '#contact',
        },
    ];

    return (
        <header className="header flex-center">
            <div className="header__logo">Cahee</div>
            <nav>
                {items.map(item => <Item key={item.label} label={item.label} href={item.href} />)}
            </nav>
        </header>
    )
}

export default Header;

