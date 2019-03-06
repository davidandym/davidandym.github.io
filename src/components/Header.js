import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="header-name">
                David Mueller
            </div>
            <div className="header-links">
                <div className="header-link">
                    <Link className="head-a" to="/">About</Link>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/publications">My One Publication</Link>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/blog">Blog</Link>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/pictures">Pics</Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Header;