import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Calc">Federal Income Tax Bracket Calculator</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;