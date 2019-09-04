import React, { Component } from "react";

import profilePicture from '../logo.svg'

class Suggested extends Component {
    render() {
        return(
            <React.Fragment>
                <img src={profilePicture} alt="Profile"/>
                <p>Name</p>
                <span>@username</span>
            </React.Fragment>
        );
    }

}

export default Suggested;