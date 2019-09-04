import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return(
            <React.Fragment>
                <footer className="container footer">
                    <div className="row">
                        <div className="col-4 footer-columns">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                        <div className="col-4 footer-columns">
                            <a className="email" href="mailto:davi@davi.com">davi@davi.com</a>
                        </div>
                        <div className="col-4 footer-columns">
                            <ul className="social-medias">
                                <li><a href="https://www.instagram.com/davicunha.js/" target="_blank">Instagram</a></li>
                                <li><a href="https://github.com/Davi-Silva" target="_blank">Github</a></li>
                            </ul>
                        </div>
                        <div className="col-12 copyright">
                            <p className="text-center">Developed by <a href="https://github.com/Davi-Silva" target="_blank">davisilva</a></p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;