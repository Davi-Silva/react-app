import React, { Component } from 'react';

import Profile from '../profile'
import Feed from '../feed'
import Suggested from '../suggested'

import '../../css/home.css'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container home">
                    <div className="row">
                        <div className="col-3 profile-container container" id="profile-container">
                            <Profile />
                        </div>
                        <div className="col-6 feed-container container" id="feed-container">
                            <Feed />
                        </div>
                        <div className=" col-3 suggested-container container" id="suggested-container">
                            <Suggested />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;