import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="container-fluid navigation-bar">
                    <div className="row">
                        <div className="col-3 logo">
                            <Link to='/'><img src={logo} alt="Logo"/></Link>
                        </div>
                        <div className="col-6 search-bar">
                            <form action="." method="get">
                                <input type="text" name="q" id="search-bar-input" placeholder="Search"/>
                                <button type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-3 links">
                            <ul id="navbar-ul">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/'>Home</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavigationBar;