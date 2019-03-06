import React, { Component } from 'react';
import "../css/footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-link">
                    <a className="foot-a" href="https://twitter.com/_dave_andy_m">
                        Twitter
                    </a>
                </div>
                <div className="footer-link">
                    <a className="foot-a" href="https://github.com/davidandym">
                        Github
                    </a>
                </div>
                <div className="footer-link">
                    <a className="foot-a" href="https://www.linkedin.com/in/davidandym/">
                        LinkedIn
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;