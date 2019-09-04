import React, { Component } from "react";

import profilePicture from '../logo.svg'

class Profile extends Component {
    render() {
        return(
            <React.Fragment>
                <header>
                    <img src={profilePicture} alt="Profile"/>
                    <p>Name</p>
                    <span>@username</span>
                    <p>
                        Nunc sit amet finibus nisi. Vivamus egestas 
                        fringilla metus at dapibus. Phasellus consectetur 
                        accumsan bibendum.
                    </p>
                </header>
            </React.Fragment>
        );
    }

}

export default Profile;