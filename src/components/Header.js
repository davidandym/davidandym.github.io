import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
			<div className="header-text">
            <div className="header-name">
                <Link className="head-a" to="/"><b>David Mueller</b></Link>
            </div>
            <div className="header-links">
                <div className="header-link">
                    <a className="head-a" href="/papers/cv.pdf">CV</a>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/publications">Publications</Link>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/blog">Blog</Link>
                </div>
                <div className="header-link">
                    <Link className="head-a" to="/pictures">Photos</Link>
                </div>
                <div className="header-link">
                    <a className="fa fa-twitter fa-head" href="https://twitter.com/dam_nlp">
                    </a>
                </div>
                <div className="header-link">
                    <a className="fa fa-github fa-head" href="https://github.com/davidandym">
                    </a>
                </div>

            </div>
			</div>
            </div>
        )
    }
}

export default Header;